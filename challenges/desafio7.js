db.produtos.find(
  {
    vendidos: { $ne: 50 },
    tags: null,
    // Another way: "tags: { $exists: false }"
  },
  {
    _id: 0,
    nome: 1,
    vendidos: 1,
  },
);
