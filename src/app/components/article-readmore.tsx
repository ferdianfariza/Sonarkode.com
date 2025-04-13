"use client"; // <-- Penting! Komponen ini menggunakan hooks sisi klien

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { allPosts, Post } from 'contentlayer/generated'; // Impor tipe Post juga jika pakai TS
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react'; // Impor useState dan useEffect

export default function ArticleReadAlso() {
   const params = useParams();
   const currentSlug = params?.slug as string; // Dapatkan slug dari halaman saat ini

   // State untuk menyimpan post yang disarankan secara acak
   const [suggestedPost, setSuggestedPost] = useState<Post | null>(null);

   useEffect(() => {
     // Pastikan slug saat ini ada dan allPosts ada isinya
     if (currentSlug && allPosts.length > 0) {
       // 1. Filter post: Hapus post yang sedang dibuka dari daftar
       const otherPosts = allPosts.filter(
         (post) => post._raw.flattenedPath !== currentSlug
       );

       // 2. Jika ada post lain yang tersedia
       if (otherPosts.length > 0) {
         // 3. Pilih indeks acak
         const randomIndex = Math.floor(Math.random() * otherPosts.length);
         // 4. Set state dengan post yang terpilih secara acak
         setSuggestedPost(otherPosts[randomIndex]);
       } else {
         // Tidak ada post lain untuk disarankan
         setSuggestedPost(null);
       }
     }
   }, [currentSlug]); // Jalankan efek ini ketika slug berubah (meskipun biasanya tidak di halaman yang sama)

   // Jika tidak ada post yang bisa disarankan (misalnya hanya ada 1 post total, atau belum terpilih)
   if (!suggestedPost) {
     return null; // Jangan render apapun
   }

   // Pastikan post yang disarankan punya data yang dibutuhkan
   if (!suggestedPost.title || !suggestedPost.summary || !suggestedPost.url) {
     console.warn("Suggested post is missing required data (title, summary, or url)");
     return null; // Jangan render jika data penting tidak ada
   }

  return (
    // Container utama, beri jarak atas
    <div className="mt-16 w-full max-w-2xl mx-auto">
      {/* Card styling, tengahkan teks */}
      <div className="p-8 border border-zinc-300 dark:border-zinc-700 rounded-sm text-center bg-zinc-50 dark:bg-zinc-900/30">

        {/* Label "BACA JUGA" - Sesuaikan styling seperti contoh target */}
        <p className="text-[14px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
          Baca Juga
        </p>

        {/* Judul Artikel Saran - Sesuaikan styling */}
        <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-900 dark:text-zinc-100">
          {suggestedPost.title}
        </h3>

        {/* Deskripsi/Summary Artikel Saran - Sesuaikan styling */}
        <p className="text-[16px] text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto mb-6">
          {suggestedPost.summary}
        </p>

        {/* Tombol "Mulai Baca" - Perbaiki styling agar seperti tombol */}
         <Link
           href={suggestedPost.url}
           className="inline-flex items-center px-3 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-sm text-[16px] font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 transition-colors"
         >
           Mulai Baca
           <ArrowRight className="ml-2 w-4 h-4" /> {/* Ikon setelah teks */}
         </Link>

      </div>
    </div>
  );
}