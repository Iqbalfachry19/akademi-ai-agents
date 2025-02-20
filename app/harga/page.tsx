"use client";
import { CheckCircle } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Pilihan Harga
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
            <p className="text-4xl font-bold text-center mb-6">Free</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Akses ke
                3 kursus dasar
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Forum
                diskusi
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                Sertifikat kelulusan
              </li>
            </ul>
            <Button className="mt-auto">Pilih Paket</Button>
          </div>
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-primary">
            <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
            <p className="text-4xl font-bold text-center mb-6">
              Rp 2.000.000
              <span className="text-sm font-normal">/bulan</span>
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Akses ke
                semua kursus
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Proyek
                praktis dengan review
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                Mentoring 1-on-1
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                Sertifikat keahlian
              </li>
            </ul>
            <Button className="mt-auto">Pilih Paket</Button>
          </div>
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
            <p className="text-4xl font-bold text-center mb-6">Rp 20.000.000</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Akses
                kursus lifetime
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Solusi
                kustom untuk perusahaan
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                Pelatihan tim
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                Integrasi dengan sistem Anda
              </li>
            </ul>
            <Button className="mt-auto">Hubungi Kami</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
