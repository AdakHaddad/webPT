// components/OrgChartNode.js
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
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
      },
      {
        customId: "alamin_yogyakarta",
        customParentId: "rabithah_alawiyah",
        customName: "Alamin Yogyakarta",
      },
      // {
      //   customId: "ketua_alamin_yogyakarta",
      //   customParentId: "alamin_yogyakarta",
      //   customName: "Ketua: Zayd Shahab",
      // },
      // {
      //   customId: "wakil_alamin_yogyakarta",
      //   customParentId: "alamin_yogyakarta",
      //   customName: "Wakil Ketua: Syarief Segaf",
      // },
      // {
      //   customId: "dewan_alamin_yogyakarta",
      //   customParentId: "alamin_yogyakarta",
      //   customName: "Dewan Penasihat: Muhsin Segaf",
      // },

      {
        customId: "syubban_ra",
        customParentId: "rabithah_alawiyah",
        customName: "Syubban RA",
      },
      // {
      //   customId: "ketua_syubban_ra",
      //   customParentId: "syubban_ra",
      //   customName: "Ketua: Yusuf Qadri",
      // },
      {
        customId: "asyraaf_uipnj",
        customParentId: "rabithah_alawiyah",
        customName: "Asyraaf UIPNJ",
      },
      {
        customId: "pemuda_rabithah_malang",
        customParentId: "rabithah_alawiyah",
        customName: "Pemuda Rabithah Malang",
      },
    ];

    const drawChart = () => {
      const orgChart = new OrgChart(); // Create a new OrgChart instance

      new OrgChart()
        .nodeId((dataItem) => dataItem.customId)
        .parentNodeId((dataItem) => dataItem.customParentId)
        .nodeWidth((node) => 100)
        .nodeHeight((node) => 100)
        .nodeContent((node) => {
          return `<div class="flex flex-col items-center justify-center p-2 bg-green-500 text-white rounded w-auto h-full">
           ${node.data.customName}
       </div>`;
        })
        .container(".chart-container")
        .data(data)
        .render();
    };

    if (chartRef.current && data) {
      drawChart();
    }
  }, [chartRef, data]);

  return <div ref={chartRef} className="chart-container"></div>;
};

export default OrgChartNode;
