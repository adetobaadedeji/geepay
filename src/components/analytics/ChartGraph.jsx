import React from "react";
import ReactECharts from "echarts-for-react";
import { useSmallScreen } from "../../hooks/useSmallScreen";

const ChartGraph = () => {
  const isSmallScreen = useSmallScreen();

  const option = {
    textStyle: {
      fontFamily: "Plus Jakarta Sans",
      fontSize: 14,
      fontWeight: 500,
      overflow: "truncate",
      lineOverflow: "truncate",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
        label: {
          show: false,
        },
      },
      backgroundColor: "rgba(0, 0, 0, 1)",
      borderColor: "transparent",
      textStyle: {
        color: "#fff",
      },
      formatter: (params) => {
        const value = params[0].value;
        return `$${value.toFixed(3)}`;
      },
      position: "top",
    },
    grid: {
      left: "1.1%",
      right: isSmallScreen ? "5%" : "0%",
      bottom: "0%",
      top: "7%",
      containLabel: true,
    },
    yAxis: isSmallScreen
      ? {
          type: "category",
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(163, 163, 163, 1)",
            },
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
        }
      : {
          type: "value",
          min: 0,
          max: 40,
          axisLine: {
            lineStyle: {
              color: "rgba(163, 163, 163, 1)",
            },
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          axisLabel: {
            formatter: (value) => `${value.toFixed(3)}`,
          },
          interval: 5,
        },
    xAxis: isSmallScreen
      ? {
          type: "value",
          min: 0,
          max: 40,
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          interval: 5,
        }
      : {
          type: "category",
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(163, 163, 163, 1)",
            },
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
        },

    series: [
      {
        type: "bar",
        data: [12, 21, 7, 28, 14, 38, 14, 23, 32, 9, 30, 26],
        barWidth: isSmallScreen ? 15 : 30,
        barCategoryGap: 0,
        barGap: 0,
        itemStyle: {
          color: "rgba(52, 202, 165, 0.1)",
          borderRadius: isSmallScreen ? [0, 50, 50, 0] : [50, 50, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: {
              type: "linear",
              x: isSmallScreen ? 1 : 0,
              y: 0,
              x2: isSmallScreen ? 0 : 1,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(52, 202, 165, 1)" },
                { offset: 1, color: "rgba(52, 202, 165, 0)" },
              ],
            },
          },
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: "100%" }} />
  );
};

export default ChartGraph;
