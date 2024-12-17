"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';
import { getData } from "@/api/getData";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Status() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchPhone, setSearchPhone] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [clickedSearch, setClickedSearch] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const columnLabel:any = {
    0:'Tarikh terima',
    1:'Tarikh tindakan',
    2:'Nama pengadu',
    3:'Nombor Telefon',
    4:'Skop/Bahagian',
    5:'Perihal aduan',
    6:'Catatan',
    7:'Status',
  }

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        let data = await getData();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    asyncFunc();
  }, []);

  const handleSearch = () => {
    if (!user) return;
    setClickedSearch(true)
    const results: any = Object.values(user).filter((item: any) => 
      item[3] == searchPhone
    );
    setFilteredResults(results);
    setExpandedIndex(results.length === 1 ? 0 : null);
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="flex w-screen h-screen justify-center items-center bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      <div 
        className="h-[80%] w-[90%] rounded-xl relative flex flex-col justify-center items-center gap-5"
        style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-7 gap-5">
          <div className="flex relative w-[30%] md:w-[15%]">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={200} 
              height={200}
            />
          </div>
          <div className="w-[100%] md:w-[50%] text-center flex flex-col gap-5 text-white">
            <p className="md:text-3xl text-xl">STATUS ADUAN</p>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex w-[80%] gap-3">
          <input 
            type="text" 
            placeholder="Masukkan Nombor Telefon"
            value={searchPhone}
            onChange={(e) => {
                setSearchPhone(e.target.value)
                setClickedSearch(false)
            }}
            className="w-full p-2 rounded text-black"
          />
          <button 
            onClick={handleSearch}
            className="rounded text-black px-5 py-2 bg-[#f79b00] hover:bg-[#ffd284]"
          >
            Cari
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-white">
            Sedang Memuatkan...
          </div>
        )}

        {/* Results Section */}
        {!loading && filteredResults.length > 0 && (
          <div className="w-[80%] max-h-[300px] overflow-y-auto text-black space-y-3">
            {filteredResults.map((item:any, index:any) => (
              <div 
                key={index} 
                className="bg-[rgba(255,255,255,0.8)] rounded-lg p-4 text-black"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <span className="font-bold">Aduan nombor: </span>{index}
                    {filteredResults.length > 1 && (
                      expandedIndex === index ? <ChevronUp className="inline ml-2 text-black"/> : <ChevronDown className="inline ml-2 text-black"/>
                    )}
                  </div>
                </div>

                {(expandedIndex === index || filteredResults.length === 1) && (
                  <div className="mt-3 space-y-4">
                    {item.map((detail: any, detailIndex: number) => (
                      <div key={detailIndex} className="flex">
                        <span className="font-semibold mr-2">
                          {columnLabel[detailIndex]}:
                        </span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {clickedSearch && !loading && filteredResults.length === 0 && searchPhone && (
          <div className="text-white">
            Tiada Rekod Ditemui
          </div>
        )}
      </div>
    </main>
  );
}