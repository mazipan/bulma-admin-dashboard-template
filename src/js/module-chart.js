//-------------
//- BAR CHART -
//-------------
var optionsChartBar = {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + '%';
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#f8f8f2'],
    },
  },
  series: [
    {
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    position: 'top',
    labels: {
      offsetY: -18,
      style: {
        colors: '#f8f8f2',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
      offsetY: -35,
    },
  },
  fill: {
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + '%';
      },
    },
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 320,
    align: 'center',
    style: {
      color: '#f8f8f2',
    },
  },
};

//-------------
//- LINE CHART -
//-------------
var optionsChartLine = {
  chart: {
    height: 350,
    type: 'area',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  legend: {
    labels: {
      colors: '#f8f8f2',
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00',
      '2018-09-19T01:30:00',
      '2018-09-19T02:30:00',
      '2018-09-19T03:30:00',
      '2018-09-19T04:30:00',
      '2018-09-19T05:30:00',
      '2018-09-19T06:30:00',
    ],
    labels: {
      style: {
        colors: '#f8f8f2',
      },
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        colors: ['#f8f8f2'],
      },
    },
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: '#FFF',
        width: 1,
        dashArray: 0,
      },
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
};

//-------------
//- BAR SCATTER -
//-------------

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

var optionsChartScatter = {
  chart: {
    height: 350,
    type: 'scatter',
    zoom: {
      type: 'xy',
    },
  },
  series: [
    {
      name: 'TEAM 1',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 2',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 3',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 4',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        10,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: 'TEAM 5',
      data: generateDayWiseTimeSeries(
        new Date('11 Feb 2017 GMT').getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ],
  legend: {
    labels: {
      colors: '#f8f8f2',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    xaxis: {
      showLines: true,
    },
    yaxis: {
      showLines: true,
    },
  },
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        colors: '#f8f8f2',
      },
    },
  },
  yaxis: {
    max: 70,
    labels: {
      style: {
        colors: '#f8f8f2',
      },
    },
  },
};

//-------------
//- DOUGHNUT CHART -
//-------------
var optionsChartDoughnut = {
  chart: {
    height: 280,
    type: 'radialBar',
  },
  series: [67, 84, 97, 61],
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: 'TOTAL',
          color: '#f8f8f2',
        },
        value: {
          show: true,
          color: '#f8f8f2',
        },
      },
    },
  },
  labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D'],
};

document.addEventListener('DOMContentLoaded', function () {
  new ApexCharts(
    document.querySelector('#chartScatter'),
    optionsChartScatter
  ).render();
  new ApexCharts(document.querySelector('#chartBar'), optionsChartBar).render();
  new ApexCharts(
    document.querySelector('#chartLine'),
    optionsChartLine
  ).render();
  new ApexCharts(
    document.querySelector('#chartDoughnut'),
    optionsChartDoughnut
  ).render();
});
