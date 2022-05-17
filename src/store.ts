import { reactive } from "vue";

export const store = reactive({
  cryptocoin_selectbox_value: "bitcoin",
  view_price_date_value: "",
  date: new Date()
    .toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-"),
  supported_vs_currencies_value: "usd",
  cryptocoin: {
    name: "Bitcoin",
    image: {
      large:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    },
    genesis_date: "2009-01-03",
    market_data: {
      current_price: {
        usd: 0,
        brl: 0,
        eur: 0,
        gbp: 0,
        btc: 0,
        eth: 0,
      },
      ath_change_percentage: {
        usd: 0,
        brl: 0,
        eur: 0,
        gbp: 0,
        btc: 0,
        eth: 0,
      },
      atl_change_percentage: {
        usd: 0,
        brl: 0,
        eur: 0,
        gbp: 0,
        btc: 0,
        eth: 0,
      },
      price_change_percentage_24h: 0,
    },
  },
});
