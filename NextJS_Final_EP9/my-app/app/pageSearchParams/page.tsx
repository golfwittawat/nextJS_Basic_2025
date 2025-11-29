'use client';   
import { useSearchParams } from 'next/navigation';
export default function Page() {
    // สร้างตัวแปรเพื่อดึงค่า search params
    const searchParams = useSearchParams(); 
    
    // ดึงค่าของ search param ที่ชื่อว่า page
    const name = searchParams.get('name');

    return <div>Name = {name}</div>;
}