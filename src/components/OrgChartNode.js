// components/OrgChartNode.js
import React, { useRef, useEffect } from "react";
import { OrgChart } from "d3-org-chart";
import "d3-flextree";
import styles from "./OrgChartNode.module.css";

const OrgChartNode = () => {
  const data = [
    {
      customId: "Manager",
      customParentId: null,
      customName: "Manager",
      customImage: "/img/p.png",
      penjualan: 1999,
    },
    {
      customId: "alan",
      customParentId: "Manager",
      customName: "Alan",
      customImage: "/img/p.png",
      penjualan: 1945,
    },
    {
      customId: "steve",
      customParentId: "Manager",
      customName: "Steve",
      customImage: "/img/p1.png",
      penjualan: 2000,
    },
    {
      customId: "karen",
      customParentId: "Manager",
      customName: "Karen",
      customImage: "/img/p2.png",
      penjualan: 3000,
    },
    {
      customId: "bob",
      customParentId: "Manager",
      customName: "Bob",
      customImage: "/img/p1.png",
      penjualan: 1000,
    },
    {
      customId: "andy",
      customParentId: "Manager",
      customName: "Andy",
      customImage: "/img/p.png",
      penjualan: 4998,
    },

    {
      customId: "John_Doe",
      customParentId: "Manager",
      customName: "John Doe",
      customImage: "/img/p.png",
      penjualan: 1500,
    },
    {
      customId: "suga",
      customParentId: "bob",
      customName: "Suga",
      customImage: "/img/p1.png",
      penjualan: 2500,
    },
    {
      customId: "Nur",
      customParentId: "bob",
      customName: "Nur",
      customImage: "/img/p2.png",
      penjualan: 2500,
    },
  ];
  const chartRef = useRef();

  useEffect(() => {
    const drawChart = () => {
      data.forEach((member, index) => {
        member.batch_number = String(index + 1).padStart(7, "0"); // 7 digits with leading zeros
      });
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
                <div class="bold" style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">
                  ${node.data.customName}
                </div>
                <div style="font-size: 12px; color:#08011E; margin - left: 20px; margin - top: 5px">
                  Penjualan: ${node.data.penjualan}
                </div>
                <div style="font-size: 12px; color:#08011E; margin - left: 20px; margin - top: 5px">
                  Batch Number: ${node.data.batch_number}
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
