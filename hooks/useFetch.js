import { useState, useEffect } from "react";
import { withErrorHandling } from "@/utils/withErrorHandling";

const useFetch = (fetchFn, deps = []) => {
  const [data, setData] = useState(null); // API'den dönen veri
  const [loading, setLoading] = useState(true); // Veri yükleniyor mu?
  const [error, setError] = useState(null); // Hata durumu

  const fetchData = async () => {
    if (!fetchFn) return;

    setLoading(true);
    const { data, error } = await withErrorHandling(fetchFn);
    setData(data);
    setError(error);
    setLoading(false);
    // Parametre olarak aldığın fetchFn (örneğin () => aboutService.get()) çalıştırılır.
    // withErrorHandling, hatayı yakalayarak { data, error } şeklinde döner
    // Gelen veri setData() ile state'e yazılır
    // loading durumu sona erdiğinden false yapılır
  };

  // useEffect ile ilk çalıştırma
  useEffect(() => {
    if (!fetchFn) return;

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  // Bileşen mount edildiğinde (veya deps değiştiğinde) fetchData() çalıştırılır
  // deps sayesinde dışarıdan bağımlılık tanımlanabilir (örneğin bir id değişirse tekrar fetch et)
  // eslint-disable uyarısı, fetchData fonksiyonu deps'e eklenmesin diye (aksi takdirde sonsuz döngüye girer)

  return { data, loading, error, refetch: fetchData };
  // data => Gelen Veri
  // loading => Yüklenme Durumu
  // error => Hata (varsa)
  // refetch => API tekrar çağrılmak istenirse kullanılabilecek fonksiyon
};

export default useFetch;