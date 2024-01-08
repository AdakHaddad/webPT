"use client";
import React from "react";
import OrgChartNode from "../../components/OrgChartNode";
import Link from "next/link";

const Home = () => {
  return (
    <div
      className="text-white font-bold"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <h1>Organization Chart</h1>
      <OrgChartNode
        data={[
          {
            customId: "syarif_segaf",
            customParentId: null,
            customName: "Syarif Segaf",
            customImage: "/img/p.png",
            penjualan: 1999,
          },
          {
            customId: "andi_mandiri",
            customParentId: "syarif_segaf",
            customName: "Andi Mandiri",
            customImage: "/img/p.png",
            penjualan: 1945,
          },
          {
            customId: "syarif",
            customParentId: "syarif_segaf",
            customName: "Syarif",
            customImage: "/img/p1.png",
            penjualan: 2000,
          },
          {
            customId: "bu siti",
            customParentId: "syarif_segaf",
            customName: "Bu Siti",
            customImage: "/img/p2.png",
            penjualan: 3000,
          },
          {
            customId: "syarif_bsa",
            customParentId: "syarif_segaf",
            customName: "Syarif BSA",
            customImage: "/img/p1.png",
            penjualan: 1030,
          },
          {
            customId: "syarif_habsyi",
            customParentId: "syarif_segaf",
            customName: "Syarif Habsyi",
            customImage: "/img/p.png",
            penjualan: 4998,
          },

          {
            customId: "John_Doe",
            customParentId: "syarif_segaf",
            customName: "John Doe",
            customImage: "/img/p.png",
            penjualan: 1500,
          },
          {
            customId: "agus",
            customParentId: "syarif_jufri",
            customName: "Pak Agus",
            customImage: "/img/p1.png",
            penjualan: 2500,
          },
          {
            customId: "Nur",
            customParentId: "syarif_jufri",
            customName: "Bu Nurhayati",
            customImage: "/img/p2.png",
            penjualan: 2500,
          },
          // Add more entries with random names
        ]}
      />
      <div className="mt-4">
        <Link href="/">
          <span className="text-indigo-500 underline">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
