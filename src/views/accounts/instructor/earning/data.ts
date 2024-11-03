import type { ApexChartType } from "@/types";

const ThemeColor = (e: any) => {
  let t = getComputedStyle(document.documentElement).getPropertyValue(e);
  return t && t.length > 0 && (t = t.trim()), t;
};

export const payoutEarningChart: ApexChartType = {
  height: 300,
  type: "area",
  series: [{
    name: 'Payout',
    data: [500, 700, 900, 1500, 1800, 1000, 0, 2000, 3200, 3000, 4800, 4000]
  }],
  options: {

    chart: {
      height: 300,
      type: 'area',
      sparkline: {
        enabled: !0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: [ThemeColor('--bs-primary')],
    xaxis: {
      // type: 'Payout',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct ', 'Nov', 'Dec']
    },
    grid: {

    },
    tooltip: {
      y: {
        title: {
          formatter: function () {
            return "" + "$";
          }
        }
      },
      marker: {
        show: !1
      }
    }
  },
};

export const pageViewsChart: ApexChartType = {
  height: 300,
  type: "donut",
  series: [50, 20, 20, 10, 10],
  options: {
    labels: ['Course-1', 'Course-2', 'Course-3', 'Course-4', 'Course-5'],
    chart: {
      height: 300,
      width: 300,
      offsetX: 50,
      type: 'donut',
      sparkline: {
        enabled: !0
      }
    },
    colors: [
      ThemeColor('--bs-success'),
      ThemeColor('--bs-warning'),
      ThemeColor('--bs-danger'),
      ThemeColor('--bs-primary'),
      ThemeColor('--bs-secondary')
    ],
    tooltip: {
      theme: "dark"
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
          height: 200,
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};