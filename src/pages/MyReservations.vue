<template>
  <div style="max-width: 1000px; width: 100%;">
    <div class="row">
      <div align="left" class="col-12 q-py-md py-mobile text-h6">
        以下是您的預約資訊(點擊標籤可查看詳細內容)：
      </div>
    </div>
    <q-dialog v-model="displayEvent">
      <div>
        <q-card v-if="event" style="max-width: 300px;">
          <q-toolbar class="bg-primary" style="min-width: 300px;">
            <q-toolbar-title class="text-accent">
              預約資訊
            </q-toolbar-title>
            <q-btn flat round color="accent" icon="close" v-close-popup></q-btn>
          </q-toolbar>
          <q-card-section class="inset-shadow bg-accent q-pt-md pt-mobile">
            <div class="row justify-center">
              <div class="col-5">
                <div align="right" class="row">
                  <div class="col-12">預約人：</div>
                  <div class="col-12">預約日期：</div>
                  <div class="col-12">預約時間：</div>
                  <div class="col-12">大人人數：</div>
                  <div class="col-12">小孩人數：</div>
                </div>
              </div>
              <div class="col-1"></div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12"> {{ event.reservation.name }} </div>
                  <div class="col-12"> {{ event.reservation.date }} </div>
                  <div class="col-12"> {{ event.reservation.time }} </div>
                  <div class="col-12"> {{ event.reservation.adultNum }} </div>
                  <div class="col-12"> {{ event.reservation.childNum }} </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="center" class="bg-accent q-pb-md pb-mobile">
            <q-btn label="取消預約" color="primary" @click="cancelReservations(event._id, event.reservation)"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
    <q-toolbar class="bg-deep-orange-11 text-accent text-h5 row justify-between items-center">
      <div class="col-4 text-h5" style="text-align: center;">
      {{ title }}
      </div>

      <q-btn-group flat class="col-3">
        <q-btn color="white" class="text-bold" flat label="Prev" @click="onPrev" />
        <q-btn color="white" class="text-bold" flat label="Next" @click="onNext" />
      </q-btn-group>
    </q-toolbar>
    <q-separator class="full-width" /><q-separator />
    <q-calendar
      bordered
      ref="calendar"
      v-model="selectedDate"
      view="month"
      locale="zh-TW"
      :now="now"
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      :day-height="100"
      :short-weekday-label="shortWeekdayLabel"
      :short-month-label="shortMonthLabel"
      @change="onChange"
      class="text-dark"
    >
      <template #day="{ timestamp }">
        <template v-for="(event, index) in getEvents(timestamp.date)">
          <q-badge
            :key="index"
            v-if=" event.title !== '已取消預約'"
            style="width: 100%; cursor: pointer; height: 16px; max-height: 16px"
            :class="badgeClasses(event, 'day')"
            :style="badgeStyles(event, 'day')"
            @click.stop.prevent="showEvent(event)"
          >
            {{ event.reservation.time }}
            <span class="ellipsis">{{ event.title }}</span>
          </q-badge>
          <q-badge
            :key="index"
            v-if=" event.title === '已取消預約'"
            style="width: 100%; cursor: pointer; height: 16px; max-height: 16px"
            class="bg-grey-5"
            :style="badgeStyles(event, 'day')"
            @click.stop.prevent="showEvent(event)"
          >
            {{ event.reservation.time }}
            <span class="ellipsis">{{ event.title }}</span>
          </q-badge>
        </template>
      </template>
    </q-calendar>
  </div>
</template>

<style lang="sass" scoped>
  .bubble
    border-radius: 30px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>

<script>
// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)
import QCalendar from '@quasar/quasar-ui-qcalendar' // ui is aliased from '@quasar/quasar-ui-qcalendar'

// const CURRENT_DAY = new Date()
//
// function getCurrentDay (day) {
//  const newDay = new Date(CURRENT_DAY)
//  newDay.setDate(day)
//  const tm = QCalendar.parseDate(newDay)
//  return tm.date
// }

const reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/

function textToRgb (color) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string')
  }

  const m = reRGBA.exec(color)
  if (m) {
    const rgb = {
      r: Math.min(255, parseInt(m[2], 10)),
      g: Math.min(255, parseInt(m[3], 10)),
      b: Math.min(255, parseInt(m[4], 10))
    }
    if (m[1]) {
      rgb.a = Math.min(1, parseFloat(m[5]))
    }
    return rgb
  }
  return hexToRgb(color)
}

function hexToRgb (hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string')
  }

  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }

  const num = parseInt(hex, 16)

  return hex.length > 6
    ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) }
    : { r: num >> 16, g: num >> 8 & 255, b: num & 255 }
}

function luminosity (color) {
  if (typeof color !== 'string' && (!color || color.r === undefined)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color')
  }

  const
    rgb = typeof color === 'string' ? textToRgb(color) : color,
    r = rgb.r / 255,
    g = rgb.g / 255,
    b = rgb.b / 255,
    R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
    G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
    B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

export default {
  data () {
    return {
      selectedDate: '',
      now: '',
      title: '',
      shortWeekdayLabel: false,
      shortMonthLabel: false,
      dateFormatter: undefined,
      start: undefined,
      events: [],
      event: null,
      displayEvent: false
    }
  },
  beforeMount () {
    this.updateFormatter()
  },
  watch: {
    locale () {
      this.updateFormatter()
      this.updateTitle()
    }
  },
  methods: {
    onChange ({ start }) {
      this.start = start
      this.updateTitle()
    },
    onPrev () {
      this.$refs.calendar.prev()
    },
    onNext () {
      this.$refs.calendar.next()
    },
    updateTitle () {
      const myDate = QCalendar.makeDate(this.start)
      if (this.dateFormatter !== undefined) {
        this.title = this.dateFormatter.format(myDate)
      }
    },

    updateFormatter () {
      try {
        this.dateFormatter = new Intl.DateTimeFormat(this.locale || undefined, {
          month: this.shortMonthLabel ? 'short' : 'long',
          year: 'numeric',
          timeZone: 'UTC'
        })
      } catch (error) {
        // console.error('Intl.DateTimeFormat not supported')
        this.dateFormatter = undefined
      }
    },
    isCssColor (color) {
      return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/)
    },

    badgeClasses (event, type) {
      const cssColor = this.isCssColor(event.bgcolor)
      const isHeader = type === 'header'
      return {
        [`text-white bg-${event.bgcolor}`]: !cssColor,
        'full-width': !isHeader && (!event.side || event.side === 'full'),
        'left-side': !isHeader && event.side === 'left',
        'right-side': !isHeader && event.side === 'right'
      }
    },

    badgeStyles (event, type, timeStartPos, timeDurationHeight) {
      const s = {}
      if (this.isCssColor(event.bgcolor)) {
        s['background-color'] = event.bgcolor
        s.color = luminosity(event.bgcolor) > 0.5 ? 'black' : 'white'
      }
      if (timeStartPos) {
        s.top = timeStartPos(event.time) + 'px'
      }
      if (timeDurationHeight) {
        s.height = timeDurationHeight(event.duration) + 'px'
      }
      s['align-items'] = 'flex-start'
      return s
    },
    getEvents (dt) {
      const currentDate = QCalendar.parseTimestamp(dt)
      const events = []
      for (let i = 0; i < this.events.length; ++i) {
        let added = false
        if (this.events[i].reservation.date === dt) {
          if (this.events[i].reservation.time) {
            if (events.length > 0) {
            // check for overlapping times
              const startTime = QCalendar.parseTimestamp(this.events[i].reservation.date + ' ' + this.events[i].reservation.time)
              const endTime = QCalendar.addToDate(startTime, { minute: this.events[i].reservation.duration })
              for (let j = 0; j < events.length; ++j) {
                if (events[j].time) {
                  const startTime2 = QCalendar.parseTimestamp(events[j].reservation.date + ' ' + events[j].reservation.time)
                  const endTime2 = QCalendar.addToDate(startTime2, { minute: events[j].reservation.duration })
                  if (QCalendar.isBetweenDates(startTime, startTime2, endTime2) || QCalendar.isBetweenDates(endTime, startTime2, endTime2)) {
                    events[j].side = 'left'
                    this.events[i].side = 'right'
                    events.push(this.events[i])
                    added = true
                    break
                  }
                }
              }
            }
          }
          if (!added) {
            this.events[i].side = undefined
            events.push(this.events[i])
          }
        } else if (this.events[i].days) {
        // check for overlapping dates
          const startDate = QCalendar.parseTimestamp(this.events[i].reservation.date)
          const endDate = QCalendar.addToDate(startDate, { day: this.events[i].days })
          if (QCalendar.isBetweenDates(currentDate, startDate, endDate)) {
            events.push(this.events[i])
            added = true
          }
        }
      }
      return events
    },
    showEvent (event) {
      this.event = event
      this.displayEvent = true
    },
    async cancelReservations (_id, reservation) {
      console.log(_id)
      const data = {
        title: '已取消預約',
        color: 'lightgrey'
      }
      try {
        await this.api.patch('/Reservations/' + _id, data, {
          headers: {
            authorization: 'Bearer ' + this.$store.getters['user/user'].token
          }
        })
        this.$q.dialog({
          parent: this,
          title: '成功',
          message: '取消預約成功'
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
        // this.products.splice(pageIndex, 1)
      } catch (error) {
        console.log(error)
        this.$q.dialog({
          parent: this,
          title: '取消預約失敗',
          message: error.response.data.message
        }).onOk(() => {
        // console.log('OK')
        }).onCancel(() => {
        // console.log('Cancel')
        }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        })
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/reservations/me', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      this.events = data.result
    } catch (error) {
      console.log(error)
      this.$q.dialog({
        // component: dialogSuccess,
        parent: this,
        title: '錯誤',
        message: '取得預約失敗'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
