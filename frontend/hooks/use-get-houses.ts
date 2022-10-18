import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { env } from "../utils/env";

export function useGetHouses() {
  const [state, setstate] = useState({
    houses: [],
    search: "",
    loading: false,
  });
  const handleGetHouses = async (isSearching?: boolean) => {
    setstate({ ...state, loading: true });
    try {
      const response = await axios.get(
        isSearching
          ? `${env.apiUrl}/houses?name=${state.search}`
          : `${env.apiUrl}/houses`
      );
      setstate({ ...state, houses: response.data, loading: false });
    } catch (error) {
      setstate({ ...state, loading: false });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (state.search.length >= 5) handleGetHouses(true);
      else if (state.search.length === 0 || state.search === null)
        handleGetHouses(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [state.search]);
  return { state, setstate };
}

export function useGetHouse(id: string) {
  const router = useRouter();
  const [state, setstate] = useState<{
    house: any;
    loading: boolean;
  }>({
    house: null,
    loading: false,
  });
  const handleGetHouse = async () => {
    setstate({ ...state, loading: true });
    try {
      const response = await axios.get(`${env.apiUrl}/houses/${id}`);
      setstate({ ...state, house: response.data, loading: false });
    } catch (error) {
      setstate({ ...state, loading: false });
    }
  };

  useEffect(() => {
    if (router.isReady) {
      if (Object.keys(router.query).length === 0 || !router.query.id) {
        router.replace("/houses");
      } else {
        handleGetHouse();
      }
    }
  }, [router.isReady, router.query.id]);
  return { state, setstate };
}
