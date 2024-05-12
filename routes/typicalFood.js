const express = require('express');

const router = express.Router();

const typicalFood =[
        {
        "id": 1,
        "name": "Ceviche de camarón",
        "description": "Plato frío de camarones cocidos en jugo de limón con cebolla morada, tomate, cilantro y condimentos.",
        "region": "Costa",
        "main_ingredients": ["Camarones", "Limón", "Cebolla", "Tomate"]
      },
      {
        "id": 2,
        "name": "Seco de chivo",
        "description": "Estofado de carne de chivo cocinada lentamente con cerveza, acompañado de arroz, papas fritas y plátano maduro.",
        "region": "Sierra",
        "main_ingredients": ["Carne de chivo", "Cerveza", "Arroz", "Papas", "Plátano"]
      },
      {
        "id": 3,
        "name": "Encebollado",
        "description": "Sopa espesa de pescado con yuca, cebolla encurtida, tomate, cilantro y chifles.",
        "region": "Costa",
        "main_ingredients": ["Pescado", "Yuca", "Cebolla", "Tomate", "Cilantro"]
      },
      {
        "id": 4,
        "name": "Llapingachos",
        "description": "Tortillas de papa rellenas de queso acompañadas de chorizo, huevo frito, aguacate y ensalada.",
        "region": "Sierra",
        "main_ingredients": ["Papa", "Queso", "Chorizo", "Huevo", "Aguacate"]
      },
      {
        "id": 5,
        "name": "Guatita",
        "description": "Guiso espeso de mondongo cocinado con maní, acompañado de arroz blanco y rodajas de plátano maduro.",
        "region": "Costa",
        "main_ingredients": ["Mondongo", "Maní", "Arroz", "Plátano"]
      },
      {
        "id": 6,
        "name": "Fanesca",
        "description": "Sopa espesa de bacalao y granos como habas, lentejas y garbanzos, servida con empanadas de viento.",
        "region": "Sierra",
        "main_ingredients": ["Bacalao", "Habas", "Lentejas", "Garbanzos", "Empanadas"]
      }
];

router.get('/', (req, res, next)=>{
    res.json({typicalFood});
})

router.get('/:Tid', (req, res, next)=>{
    console.log(req.params.Tid);

    const food = typicalFood.find(t=>{
        return t.id == req.params.Tid;
    });
    res.json({food});
})
module.exports = router;