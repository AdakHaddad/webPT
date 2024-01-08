// components/OrgChartNode.js
import React, { useRef, useEffect } from "react";
import { OrgChart } from "d3-org-chart";
import "d3-flextree";
import styles from "./OrgChartNode.module.css";

const OrgChartNode = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [
      {
        customId: "rabithah_alawiyah",
        customParentId: null,
        customName: "Rabithah Alawiyah",
        customImage: "/img/logo.png",
        penjualan: "123",
      },
      {
        customId: "alamin_yogyakarta",
        customParentId: "rabithah_alawiyah",
        customName: "Alamin Yogyakarta",
        customImage: "/img/logo.png",
        penjualan: "123",
      },
      {
        customId: "syubban_ra",
        customParentId: "rabithah_alawiyah",
        customName: "Syubban RA",
        customImage: "/img/logo.png",
        penjualan: "123",
      },
      {
        customId: "asyraaf_uipnj",
        customParentId: "rabithah_alawiyah",
        customName: "Asyraaf UIPNJ",
        customImage: "/img/logo.png",
        penjualan: "123",
      },
      {
        customId: "pemuda_rabithah_malang",
        customParentId: "rabithah_alawiyah",
        customName: "Pemuda Rabithah Malang",
        customImage: "/img/logo.png",
        penjualan: "100",
      },
    ];

    const drawChart = () => {
      const orgChart = new OrgChart()
        .nodeHeight((node) => 85 + 25)
        .nodeWidth((node) => 220 + 2)
        .nodeId((dataItem) => dataItem.customId)
        .parentNodeId((dataItem) => dataItem.customParentId)
        .childrenMargin((node) => 50)
        .compactMarginBetween((node) => 35)
        .compactMarginPair((node) => 30)
        .nodeContent(function (node) {
          const color = "#FFFFFF";
          const imageDiffVert = 25 + 2;
          return `
            <div style="width:${
              node.width
            }px;height:${node.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px">
              <div style="font-family: 'Inter', sans-serif;background-color:${color};margin-left:-1px;width:${node.width - 2}px;height:${node.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">
                  #${node.data.customId}
                </div>
                <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;"></div>
                <div style="margin-top:${-imageDiffVert - 20}px;">
                  <img src=${
                    node.data.customImage
                  } style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" />
                </div>
                <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">
                  ${node.data.customName}
                </div>
                <div style="font-size: 12px; color:#08011E; margin - left: 20px; margin - top: 5px">
                  Penjualan: ${node.data.penjualan}
                </div>
              </div>
            </div>`;
        });

      const chartContainer = chartRef.current;
      orgChart.container(chartContainer).data(data).render();
    };

    if (chartRef.current && data) {
      drawChart();
    }
  }, [chartRef, data]);

  return <div ref={chartRef} className="chart-container"></div>;
};

export default OrgChartNode;
