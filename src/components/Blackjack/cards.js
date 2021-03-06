const cards = [
  { name: "0c", value: 10, image: "cards/0c.svg" },
  { name: "0d", value: 10, image: "cards/0d.svg" },
  { name: "0h", value: 10, image: "cards/0h.svg" },
  { name: "0s", value: 10, image: "cards/0s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "3c", value: 3, image: "cards/3c.svg" },
  { name: "3d", value: 3, image: "cards/3d.svg" },
  { name: "3h", value: 3, image: "cards/3h.svg" },
  { name: "3s", value: 3, image: "cards/3s.svg" },
  { name: "4c", value: 4, image: "cards/4c.svg" },
  { name: "4d", value: 4, image: "cards/4d.svg" },
  { name: "4h", value: 4, image: "cards/4h.svg" },
  { name: "4s", value: 4, image: "cards/4s.svg" },
  { name: "5c", value: 5, image: "cards/5c.svg" },
  { name: "5d", value: 5, image: "cards/5d.svg" },
  { name: "5h", value: 5, image: "cards/5h.svg" },
  { name: "5s", value: 5, image: "cards/5s.svg" },
  { name: "6c", value: 6, image: "cards/6c.svg" },
  { name: "6d", value: 6, image: "cards/6d.svg" },
  { name: "6h", value: 6, image: "cards/6h.svg" },
  { name: "6s", value: 6, image: "cards/6s.svg" },
  { name: "7c", value: 7, image: "cards/7c.svg" },
  { name: "7d", value: 7, image: "cards/7d.svg" },
  { name: "7h", value: 7, image: "cards/7h.svg" },
  { name: "7s", value: 7, image: "cards/7s.svg" },
  { name: "8c", value: 8, image: "cards/8c.svg" },
  { name: "8d", value: 8, image: "cards/8d.svg" },
  { name: "8h", value: 8, image: "cards/8h.svg" },
  { name: "8s", value: 8, image: "cards/8s.svg" },
  { name: "9c", value: 9, image: "cards/9c.svg" },
  { name: "9d", value: 9, image: "cards/9d.svg" },
  { name: "9h", value: 9, image: "cards/9h.svg" },
  { name: "9s", value: 9, image: "cards/9s.svg" },
  { name: "ac", value: "1or11", image: "cards/ac.svg" },
  { name: "ad", value: "1or11", image: "cards/ad.svg" },
  { name: "ah", value: "1or11", image: "cards/ah.svg" },
  { name: "as", value: "1or11", image: "cards/as.svg" },
  { name: "jc", value: 10, image: "cards/jc.svg" },
  { name: "jd", value: 10, image: "cards/jd.svg" },
  { name: "jh", value: 10, image: "cards/jh.svg" },
  { name: "js", value: 10, image: "cards/js.svg" },
  { name: "kc", value: 10, image: "cards/kc.svg" },
  { name: "kd", value: 10, image: "cards/kd.svg" },
  { name: "kh", value: 10, image: "cards/kh.svg" },
  { name: "ks", value: 10, image: "cards/ks.svg" },
  { name: "qc", value: 10, image: "cards/qc.svg" },
  { name: "qd", value: 10, image: "cards/qd.svg" },
  { name: "qh", value: 10, image: "cards/qh.svg" },
  { name: "qs", value: 10, image: "cards/qs.svg" },
  { name: "0c", value: 10, image: "cards/0c.svg" },
  { name: "0d", value: 10, image: "cards/0d.svg" },
  { name: "0h", value: 10, image: "cards/0h.svg" },
  { name: "0s", value: 10, image: "cards/0s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "3c", value: 3, image: "cards/3c.svg" },
  { name: "3d", value: 3, image: "cards/3d.svg" },
  { name: "3h", value: 3, image: "cards/3h.svg" },
  { name: "3s", value: 3, image: "cards/3s.svg" },
  { name: "4c", value: 4, image: "cards/4c.svg" },
  { name: "4d", value: 4, image: "cards/4d.svg" },
  { name: "4h", value: 4, image: "cards/4h.svg" },
  { name: "4s", value: 4, image: "cards/4s.svg" },
  { name: "5c", value: 5, image: "cards/5c.svg" },
  { name: "5d", value: 5, image: "cards/5d.svg" },
  { name: "5h", value: 5, image: "cards/5h.svg" },
  { name: "5s", value: 5, image: "cards/5s.svg" },
  { name: "6c", value: 6, image: "cards/6c.svg" },
  { name: "6d", value: 6, image: "cards/6d.svg" },
  { name: "6h", value: 6, image: "cards/6h.svg" },
  { name: "6s", value: 6, image: "cards/6s.svg" },
  { name: "7c", value: 7, image: "cards/7c.svg" },
  { name: "7d", value: 7, image: "cards/7d.svg" },
  { name: "7h", value: 7, image: "cards/7h.svg" },
  { name: "7s", value: 7, image: "cards/7s.svg" },
  { name: "8c", value: 8, image: "cards/8c.svg" },
  { name: "8d", value: 8, image: "cards/8d.svg" },
  { name: "8h", value: 8, image: "cards/8h.svg" },
  { name: "8s", value: 8, image: "cards/8s.svg" },
  { name: "9c", value: 9, image: "cards/9c.svg" },
  { name: "9d", value: 9, image: "cards/9d.svg" },
  { name: "9h", value: 9, image: "cards/9h.svg" },
  { name: "9s", value: 9, image: "cards/9s.svg" },
  { name: "ac", value: "1or11", image: "cards/ac.svg" },
  { name: "ad", value: "1or11", image: "cards/ad.svg" },
  { name: "ah", value: "1or11", image: "cards/ah.svg" },
  { name: "as", value: "1or11", image: "cards/as.svg" },
  { name: "jc", value: 10, image: "cards/jc.svg" },
  { name: "jd", value: 10, image: "cards/jd.svg" },
  { name: "jh", value: 10, image: "cards/jh.svg" },
  { name: "js", value: 10, image: "cards/js.svg" },
  { name: "kc", value: 10, image: "cards/kc.svg" },
  { name: "kd", value: 10, image: "cards/kd.svg" },
  { name: "kh", value: 10, image: "cards/kh.svg" },
  { name: "ks", value: 10, image: "cards/ks.svg" },
  { name: "qc", value: 10, image: "cards/qc.svg" },
  { name: "qd", value: 10, image: "cards/qd.svg" },
  { name: "qh", value: 10, image: "cards/qh.svg" },
  { name: "qs", value: 10, image: "cards/qs.svg" },
  { name: "0c", value: 10, image: "cards/0c.svg" },
  { name: "0d", value: 10, image: "cards/0d.svg" },
  { name: "0h", value: 10, image: "cards/0h.svg" },
  { name: "0s", value: 10, image: "cards/0s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "3c", value: 3, image: "cards/3c.svg" },
  { name: "3d", value: 3, image: "cards/3d.svg" },
  { name: "3h", value: 3, image: "cards/3h.svg" },
  { name: "3s", value: 3, image: "cards/3s.svg" },
  { name: "4c", value: 4, image: "cards/4c.svg" },
  { name: "4d", value: 4, image: "cards/4d.svg" },
  { name: "4h", value: 4, image: "cards/4h.svg" },
  { name: "4s", value: 4, image: "cards/4s.svg" },
  { name: "5c", value: 5, image: "cards/5c.svg" },
  { name: "5d", value: 5, image: "cards/5d.svg" },
  { name: "5h", value: 5, image: "cards/5h.svg" },
  { name: "5s", value: 5, image: "cards/5s.svg" },
  { name: "6c", value: 6, image: "cards/6c.svg" },
  { name: "6d", value: 6, image: "cards/6d.svg" },
  { name: "6h", value: 6, image: "cards/6h.svg" },
  { name: "6s", value: 6, image: "cards/6s.svg" },
  { name: "7c", value: 7, image: "cards/7c.svg" },
  { name: "7d", value: 7, image: "cards/7d.svg" },
  { name: "7h", value: 7, image: "cards/7h.svg" },
  { name: "7s", value: 7, image: "cards/7s.svg" },
  { name: "8c", value: 8, image: "cards/8c.svg" },
  { name: "8d", value: 8, image: "cards/8d.svg" },
  { name: "8h", value: 8, image: "cards/8h.svg" },
  { name: "8s", value: 8, image: "cards/8s.svg" },
  { name: "9c", value: 9, image: "cards/9c.svg" },
  { name: "9d", value: 9, image: "cards/9d.svg" },
  { name: "9h", value: 9, image: "cards/9h.svg" },
  { name: "9s", value: 9, image: "cards/9s.svg" },
  { name: "ac", value: "1or11", image: "cards/ac.svg" },
  { name: "ad", value: "1or11", image: "cards/ad.svg" },
  { name: "ah", value: "1or11", image: "cards/ah.svg" },
  { name: "as", value: "1or11", image: "cards/as.svg" },
  { name: "jc", value: 10, image: "cards/jc.svg" },
  { name: "jd", value: 10, image: "cards/jd.svg" },
  { name: "jh", value: 10, image: "cards/jh.svg" },
  { name: "js", value: 10, image: "cards/js.svg" },
  { name: "kc", value: 10, image: "cards/kc.svg" },
  { name: "kd", value: 10, image: "cards/kd.svg" },
  { name: "kh", value: 10, image: "cards/kh.svg" },
  { name: "ks", value: 10, image: "cards/ks.svg" },
  { name: "qc", value: 10, image: "cards/qc.svg" },
  { name: "qd", value: 10, image: "cards/qd.svg" },
  { name: "qh", value: 10, image: "cards/qh.svg" },
  { name: "qs", value: 10, image: "cards/qs.svg" },
  { name: "0c", value: 10, image: "cards/0c.svg" },
  { name: "0d", value: 10, image: "cards/0d.svg" },
  { name: "0h", value: 10, image: "cards/0h.svg" },
  { name: "0s", value: 10, image: "cards/0s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "3c", value: 3, image: "cards/3c.svg" },
  { name: "3d", value: 3, image: "cards/3d.svg" },
  { name: "3h", value: 3, image: "cards/3h.svg" },
  { name: "3s", value: 3, image: "cards/3s.svg" },
  { name: "4c", value: 4, image: "cards/4c.svg" },
  { name: "4d", value: 4, image: "cards/4d.svg" },
  { name: "4h", value: 4, image: "cards/4h.svg" },
  { name: "4s", value: 4, image: "cards/4s.svg" },
  { name: "5c", value: 5, image: "cards/5c.svg" },
  { name: "5d", value: 5, image: "cards/5d.svg" },
  { name: "5h", value: 5, image: "cards/5h.svg" },
  { name: "5s", value: 5, image: "cards/5s.svg" },
  { name: "6c", value: 6, image: "cards/6c.svg" },
  { name: "6d", value: 6, image: "cards/6d.svg" },
  { name: "6h", value: 6, image: "cards/6h.svg" },
  { name: "6s", value: 6, image: "cards/6s.svg" },
  { name: "7c", value: 7, image: "cards/7c.svg" },
  { name: "7d", value: 7, image: "cards/7d.svg" },
  { name: "7h", value: 7, image: "cards/7h.svg" },
  { name: "7s", value: 7, image: "cards/7s.svg" },
  { name: "8c", value: 8, image: "cards/8c.svg" },
  { name: "8d", value: 8, image: "cards/8d.svg" },
  { name: "8h", value: 8, image: "cards/8h.svg" },
  { name: "8s", value: 8, image: "cards/8s.svg" },
  { name: "9c", value: 9, image: "cards/9c.svg" },
  { name: "9d", value: 9, image: "cards/9d.svg" },
  { name: "9h", value: 9, image: "cards/9h.svg" },
  { name: "9s", value: 9, image: "cards/9s.svg" },
  { name: "ac", value: "1or11", image: "cards/ac.svg" },
  { name: "ad", value: "1or11", image: "cards/ad.svg" },
  { name: "ah", value: "1or11", image: "cards/ah.svg" },
  { name: "as", value: "1or11", image: "cards/as.svg" },
  { name: "jc", value: 10, image: "cards/jc.svg" },
  { name: "jd", value: 10, image: "cards/jd.svg" },
  { name: "jh", value: 10, image: "cards/jh.svg" },
  { name: "js", value: 10, image: "cards/js.svg" },
  { name: "kc", value: 10, image: "cards/kc.svg" },
  { name: "kd", value: 10, image: "cards/kd.svg" },
  { name: "kh", value: 10, image: "cards/kh.svg" },
  { name: "ks", value: 10, image: "cards/ks.svg" },
  { name: "qc", value: 10, image: "cards/qc.svg" },
  { name: "qd", value: 10, image: "cards/qd.svg" },
  { name: "qh", value: 10, image: "cards/qh.svg" },
  { name: "qs", value: 10, image: "cards/qs.svg" },
  { name: "0c", value: 10, image: "cards/0c.svg" },
  { name: "0d", value: 10, image: "cards/0d.svg" },
  { name: "0h", value: 10, image: "cards/0h.svg" },
  { name: "0s", value: 10, image: "cards/0s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "3c", value: 3, image: "cards/3c.svg" },
  { name: "3d", value: 3, image: "cards/3d.svg" },
  { name: "3h", value: 3, image: "cards/3h.svg" },
  { name: "3s", value: 3, image: "cards/3s.svg" },
  { name: "4c", value: 4, image: "cards/4c.svg" },
  { name: "4d", value: 4, image: "cards/4d.svg" },
  { name: "4h", value: 4, image: "cards/4h.svg" },
  { name: "4s", value: 4, image: "cards/4s.svg" },
  { name: "5c", value: 5, image: "cards/5c.svg" },
  { name: "5d", value: 5, image: "cards/5d.svg" },
  { name: "5h", value: 5, image: "cards/5h.svg" },
  { name: "5s", value: 5, image: "cards/5s.svg" },
  { name: "6c", value: 6, image: "cards/6c.svg" },
  { name: "6d", value: 6, image: "cards/6d.svg" },
  { name: "6h", value: 6, image: "cards/6h.svg" },
  { name: "6s", value: 6, image: "cards/6s.svg" },
  { name: "7c", value: 7, image: "cards/7c.svg" },
  { name: "7d", value: 7, image: "cards/7d.svg" },
  { name: "7h", value: 7, image: "cards/7h.svg" },
  { name: "7s", value: 7, image: "cards/7s.svg" },
  { name: "8c", value: 8, image: "cards/8c.svg" },
  { name: "8d", value: 8, image: "cards/8d.svg" },
  { name: "8h", value: 8, image: "cards/8h.svg" },
  { name: "8s", value: 8, image: "cards/8s.svg" },
  { name: "9c", value: 9, image: "cards/9c.svg" },
  { name: "9d", value: 9, image: "cards/9d.svg" },
  { name: "9h", value: 9, image: "cards/9h.svg" },
  { name: "9s", value: 9, image: "cards/9s.svg" },
  { name: "ac", value: "1or11", image: "cards/ac.svg" },
  { name: "ad", value: "1or11", image: "cards/ad.svg" },
  { name: "ah", value: "1or11", image: "cards/ah.svg" },
  { name: "as", value: "1or11", image: "cards/as.svg" },
  { name: "jc", value: 10, image: "cards/jc.svg" },
  { name: "jd", value: 10, image: "cards/jd.svg" },
  { name: "jh", value: 10, image: "cards/jh.svg" },
  { name: "js", value: 10, image: "cards/js.svg" },
  { name: "kc", value: 10, image: "cards/kc.svg" },
  { name: "kd", value: 10, image: "cards/kd.svg" },
  { name: "kh", value: 10, image: "cards/kh.svg" },
  { name: "ks", value: 10, image: "cards/ks.svg" },
  { name: "qc", value: 10, image: "cards/qc.svg" },
  { name: "qd", value: 10, image: "cards/qd.svg" },
  { name: "qh", value: 10, image: "cards/qh.svg" },
  { name: "qs", value: 10, image: "cards/qs.svg" },
  { name: "0c", value: 10, image: "cards/0c.svg" },
  { name: "0d", value: 10, image: "cards/0d.svg" },
  { name: "0h", value: 10, image: "cards/0h.svg" },
  { name: "0s", value: 10, image: "cards/0s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "3c", value: 3, image: "cards/3c.svg" },
  { name: "3d", value: 3, image: "cards/3d.svg" },
  { name: "3h", value: 3, image: "cards/3h.svg" },
  { name: "3s", value: 3, image: "cards/3s.svg" },
  { name: "4c", value: 4, image: "cards/4c.svg" },
  { name: "4d", value: 4, image: "cards/4d.svg" },
  { name: "4h", value: 4, image: "cards/4h.svg" },
  { name: "4s", value: 4, image: "cards/4s.svg" },
  { name: "5c", value: 5, image: "cards/5c.svg" },
  { name: "5d", value: 5, image: "cards/5d.svg" },
  { name: "5h", value: 5, image: "cards/5h.svg" },
  { name: "5s", value: 5, image: "cards/5s.svg" },
  { name: "6c", value: 6, image: "cards/6c.svg" },
  { name: "6d", value: 6, image: "cards/6d.svg" },
  { name: "6h", value: 6, image: "cards/6h.svg" },
  { name: "6s", value: 6, image: "cards/6s.svg" },
  { name: "7c", value: 7, image: "cards/7c.svg" },
  { name: "7d", value: 7, image: "cards/7d.svg" },
  { name: "7h", value: 7, image: "cards/7h.svg" },
  { name: "7s", value: 7, image: "cards/7s.svg" },
  { name: "8c", value: 8, image: "cards/8c.svg" },
  { name: "8d", value: 8, image: "cards/8d.svg" },
  { name: "8h", value: 8, image: "cards/8h.svg" },
  { name: "8s", value: 8, image: "cards/8s.svg" },
  { name: "9c", value: 9, image: "cards/9c.svg" },
  { name: "9d", value: 9, image: "cards/9d.svg" },
  { name: "9h", value: 9, image: "cards/9h.svg" },
  { name: "9s", value: 9, image: "cards/9s.svg" },
  { name: "ac", value: "1or11", image: "cards/ac.svg" },
  { name: "ad", value: "1or11", image: "cards/ad.svg" },
  { name: "ah", value: "1or11", image: "cards/ah.svg" },
  { name: "as", value: "1or11", image: "cards/as.svg" },
  { name: "jc", value: 10, image: "cards/jc.svg" },
  { name: "jd", value: 10, image: "cards/jd.svg" },
  { name: "jh", value: 10, image: "cards/jh.svg" },
  { name: "js", value: 10, image: "cards/js.svg" },
  { name: "kc", value: 10, image: "cards/kc.svg" },
  { name: "kd", value: 10, image: "cards/kd.svg" },
  { name: "kh", value: 10, image: "cards/kh.svg" },
  { name: "ks", value: 10, image: "cards/ks.svg" },
  { name: "qc", value: 10, image: "cards/qc.svg" },
  { name: "qd", value: 10, image: "cards/qd.svg" },
  { name: "qh", value: 10, image: "cards/qh.svg" },
  { name: "qs", value: 10, image: "cards/qs.svg" },
];

export const stackedDeck = [
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" }, 
  { name: "8s", value: 8, image: "cards/8s.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "5c", value: 5, image: "cards/5c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "5s", value: 5, image: "cards/5s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "ac", value: "1or11", image: "cards/ac.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "js", value: 10, image: "cards/js.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
  { name: "2c", value: 2, image: "cards/2c.svg" },
  { name: "2d", value: 2, image: "cards/2d.svg" },
  { name: "2h", value: 2, image: "cards/2h.svg" },
  { name: "2s", value: 2, image: "cards/2s.svg" },
]

export function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const getCard = (faceState, deck) => {
  let aCard = deck.shift();
  if (faceState === "down") {
    aCard["image"] = "cardBacks/CardFix1.svg";
    return aCard;
  } else {
    return aCard;
  }
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const sumArray = (accumulator, currentValue) =>
  accumulator + currentValue;

export const reducer = (valueArray) => {
  console.log("Incoming array is: ", valueArray);
  let theScore = 0;
  if (valueArray.length === 0) {
    console.log("Empty initial array for score. Score is 0.");
    return theScore;
  }
  if (valueArray === ["1or11", "1or11"]) {
    theScore = 12;
    console.log("Two aces. Score is 12.");
    return theScore;
  }
  if (valueArray.includes("1or11") && valueArray !== ["1or11", "1or11"]) {
    console.log("Has an ace!");
    let numAces = valueArray.filter((item) => item === "1or11").length;
    let withoutAces = valueArray.filter((value) => value !== "1or11");
    if (withoutAces.length === 0 && valueArray.length === 2){
      console.log("Two aces.");
      theScore = 12;
      return theScore;
    }
    if (withoutAces.length === 0) {
      console.log("first one's an ace");
      theScore = 11;
      return theScore;
    }


    if (
      withoutAces.reduce(sumArray) + 11 * numAces === 21 ||
      withoutAces.reduce(sumArray) + 1 * numAces === 21
    ) {
      theScore = 21;
      return theScore;
    }
    if (withoutAces.reduce(sumArray) + 11 * numAces < 21) {
      theScore = withoutAces.reduce(sumArray) + 11 * numAces;
    } else if (withoutAces.reduce(sumArray) + 11 * numAces > 21) {
      if (withoutAces.reduce(sumArray) + 1 * numAces < 21) {
        theScore = withoutAces.reduce(sumArray) + 1 * numAces;
      } else {
        theScore = withoutAces.reduce(sumArray) + 1 * numAces;
      }
    }
    return theScore;
  } else {
    console.log("No Aces!");
    theScore = valueArray.reduce(sumArray);
    console.log("Score shows as", theScore);
    return theScore;
  }
};

export default cards;
