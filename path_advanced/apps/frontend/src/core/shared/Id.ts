export default class Id {
  static novo(): string {
    return events.pop() as string
    //return `${this.hash()}-${this.hash()}-${this.hash()}`;
  }

  private static hash(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}

const events = [
  "d3h3g4306li-0ntbok0xdkr8-qtwev4p8ks",
  "yxfqvt6b0c-4sb5cjr9gt7-8z3igkng45q",
  "2dmirs3b472-7l36799bpmn-jl7iykkuypq",
  "ry3sjoasd8f-zgmi0nb5tr-bf33zb2h2c5",
  "mrs9ih8e90f-8aocjhxb4ew-23phdqbzhna",
  "g7jftz60h-8letq5niq6x-f2a4wb41usn",
  "hmbh19zgd9c-40g3r1mky0t-scsc8ttwc7",
  "0wgjettwv57h-qt3hsqpl9sq-s9mls8qk9t",
  "4d130m6oujp-2ta8lo1mv4-50jaxcz40x5",
  "gm7vvuw2hjb-h5f3j8bf2i8-2cw5bbz7c2y",
  "8kha6isuo0l-5ynirpq8dw3-ix3bvun3z9",
  "ut0gywpczo-pb6t3i1kadf-x7fvbadcxa",
  "9alcb20ki0m-m182in3fc9-olbm6t11fkc",
  "iyuh9znndob-qjh85zin0p-2envifd7s1o",
  "wz06j9i7kc-y6vwmlr6poi-ifyf8snt9jp",
  "xwvd2zlrfi-iyi00r5sltp-69glfmo7edx",
  "d79cozrx7jo-yzzsvkuk3q-8q655inkx96",
  "3it74z5nlk6-n66l92m2e9r-b5bqti0y19g",
  "0i5zqhj8flbk-c79hwkkr165-sgf3chnan",
  "e22u5dimkfl-h8pqojlbj7u-lkay8uvrqeq",
  "0zwi9bvz4tvl-n6ru9a14vwo-9rc5xv7qm5l",
  "z6y9czqpxse-4nxdd83myvf-3rx6jx01ygp",
  "334c9i7492d-8qofta2krhn-nsw3ufcz7w",
  "jxmk727n5kh-ur11dgsm7ho-iowrdki2ino",
  "8kkein7apim-6r6wzjblkne-tjlc9aarb4q",
  "omwkh2dv6z8-b8og656tcwp-t61db2s24s8",
  "sov98dfwi4p-d7jsljphja4-9f7flbwfxeg",
  "r31lf96jh3-jw2mikgli9-zvae949sajd",
  "ax2w85q44y9-zt2birx5sk9-p1raxd4m8nk",
  "pggzttds7j-29x0yiuje3n-p9jqbvjx2dd",
  "bwfk1lobaip-qe7075q3abd-b2ua4gjbtxd",
  "pa0qghh8t4-j3jzbbtquv-fo7zt6ttdef",
  "2v6uflqh9in-hz7o1x5ucva-y56incrxko",
  "p30asvvdmzk-cbr62ernloe-1qd7qv6ywfb",
  "kkqsq3530d-zkd9mmb9lx-2nq60uupi2u",
  "nh0cmqoz7x8-zoeiwmzfpb-0dd37cok94v",
  "zlnnu47uz5c-3cvwa8758ar-m6ans9ykrvr",
  "dgjmu9s9p3g-5tqtdgnxpzo-4o7xym6j79x",
  "tg3c4xx47x-qmrvbst0sg-t70pu084k2q",
  "h4ah245ydmf-th5l79j4cbc-5rm0rtkgwgm",
  "bnur1nkn6wp-xuatxm7ow5-tpvc5cddzta",
  "6cvcrbaqnxc-4upeqtjy6c7-xho6jgxq1y",
  "8achw7rpi45-0buh30w2nf7-xd7u6ibozog",
  "rhqa5soh9s-uhkzrdtx84a-kbu0untcc8",
  "esgwjvdp6bf-suzhk0p4mrk-7rn09rpmj8j",
  "ms6a52vmae-ud41324r418-an6oyndajt",
  "czkmtc740vt-da6uubc4f1-i625yl3pi2",
  "xzf558dguw9-11p0e5jirbbs-bniyynkqhxc",
  "hu468e0udc9-mhgykfgm6q9-gpgr3inlhsp",
  "l603jgusil-ari4rd2msqs-esa8smvxol",
  "jvnb7prktgd-dqbcnqhdimq-nwgd7dky5i",
  "ng4tdpqzuim-dj4s5599y15-vhpd6rt9gjb",
  "wyfgay7kpla-g8wjmitaak-zngkcjp335",
  "tn93pffstxp-40l3zile63i-64spq4gjphi",
  "df6qrq5qlfh-qopkgd4qrp-m7rn554iju",
  "crrajco6mxh-q59wsd30h8a-felzeght3st",
  "ffpl8rdm3dc-4h7xonycpo8-tqf3zlt55ef",
  "a06r7eeds9k-09lljs4is08g-ylld99unave",
  "bp3bng4e579-flmvpufpia-1vzt0zx0tmu",
  "4c9riv1tkqm-kcvzzje3ei-gcxzo6ww2ts",
  "9ae0psun88q-t7skty79wq-7tsjnevpn74",
  "669luxcj91i-qj0oaxnn7qs-tgh6du7ihnc",
  "o1og55qxu3k-rcww0qv3clb-2gz8rasaifc",
  "vqiw3m8wjd-revpzpikwx-ei29kfj76k",
  "2js8rit260l-j7xngd577ua-h67s8mlx05p",
  "flbdtawm65d-2uw1zxxcu3i-1j0o3yo5zeq",
  "n8h38u6gk6m-ds41541khz7-b513i91nhul",
  "5tg9yum2hxx-g8275l6i2d7-yyo3ykl2l6",
  "qar8xtv9zqm-4ivvrsxnris-t8f6mcvig7",
  "l4bz3f9eo3-e3l1srmwpyl-41hqno4twqi",
  "7d1mvu2oqwv-roict7gxi6-z92x25fkt7",
  "75g0ivipfp6-ggtsp8ljtw7-sfxl80flsn9",
  "m4ylyuatmki-grcsytetszs-11frb4kjt8hm",
  "2i9zu5mg9s4-7t84auio9j-j0o5j1my6x",
  "jjl1p0ydwr-2rs6ogepj18-wzbru8rmk4",
  "vv3fd2qkt2-lzyhccsye5f-9ecbet2ole5",
  "j0013d65xrc-k5mapswao5l-wotzl2p7eg9",
  "v9pf7z7jxkb-f17qzcwsr1s-qp4gpjnxj6p",
  "rb5wj9k44zs-l0dn7c9j84l-lejw3mcmsd",
  "hb10sgr75qp-ef8vp9wajrj-u184tc6xe3",
  "c5x0am56d38-6vix5lvop1y-a0psamh1fvm",
  "tn18fytb279-gaoh5a2rvkg-wcbusbypvam",
  "krfny9cgb1m-709lsupowvr-di5k6eavga",
  "iri86859qr9-hk9vxm5fuao-wojr7ijot3t",
  "45de8y1dvjq-bv4wvti56i-ck0j4vyx3td",
  "34hc8ljetar-i1ccy6fm9j-6ie8fkg99o4",
  "uskl4ejghgg-42npctsael2-vhon5q99ex8",
  "m5dfezxvs0m-glml0cqv5nk-2ij24i2xej5",
  "2vawhoavbb2-i2jj7xt1cig-iwuvfynxqa",
  "8f1feqn1a6t-d9fiup9x54-0y20uwhwygho",
  "pv4e18abro-84tvy0jtljr-3sng9hiicys",
  "91kmdk71wru-qdkn6zw036-stx0lg5a12e",
  "idrtitkya9d-m9eztf8c7vi-iflb46e9yv",
  "comv4ri6isk-bsihtysm96i-v2k0laoed6",
  "iu0i2wj312f-xdknijr0oyk-5x4u72xsg0a",
  "uyopl8x3re-ke3xjreh8x8-gw107oezhm4",
  "nbybfyzoewp-3x7mkgau3s4-5tb6vgirbkw",
  "r3wvpjrm2ln-soagr77az4-tja3ea9pufl",
  "fgas1rxelpe-xfjvxio6mad-mkev5h72ia",
  "you27cfzto-lns4zlp7a-ehi9ieijnk",
]

/*for (let i = 0; i < 100; i++) {
  console.log(`\"${Id.novo()}\",`)
} // */
