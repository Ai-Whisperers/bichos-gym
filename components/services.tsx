import { Clock, Scissors } from "lucide-react";

const cats = [
  {
    "category": "Membres\u00edas",
    "items": [
      {
        "name": "Plan B\u00e1sico",
        "price": "Gs. 120.000/mes",
        "desc": "Acceso a sala de pesas y cardio en horario regular",
        "duration": "Mensual"
      },
      {
        "name": "Plan Premium",
        "price": "Gs. 200.000/mes",
        "desc": "Acceso ilimitado + clases dirigidas + evaluaciones",
        "duration": "Mensual"
      },
      {
        "name": "Plan Anual",
        "price": "Gs. 1.200.000/a\u00f1o",
        "desc": "Acceso completo + nutricionista + 10% off",
        "duration": "Anual"
      }
    ]
  },
  {
    "category": "Clases",
    "items": [
      {
        "name": "Funcional",
        "price": "Incluido",
        "desc": "Entrenamiento de alta intensidad",
        "duration": "45 min"
      },
      {
        "name": "Spinning",
        "price": "Incluido",
        "desc": "Clase de ciclismo indoor",
        "duration": "45 min"
      },
      {
        "name": "Yoga",
        "price": "Incluido",
        "desc": "Flexibilidad y relajaci\u00f3n",
        "duration": "60 min"
      },
      {
        "name": "Zumba",
        "price": "Incluido",
        "desc": "Baile y cardio divertido",
        "duration": "45 min"
      }
    ]
  },
  {
    "category": "Servicios",
    "items": [
      {
        "name": "Evaluaci\u00f3n F\u00edsica",
        "price": "Gs. 50.000",
        "desc": "Composici\u00f3n corporal y mediciones",
        "duration": "30 min"
      },
      {
        "name": "Nutricionista",
        "price": "Gs. 80.000",
        "desc": "Plan alimenticio personalizado",
        "duration": "45 min"
      },
      {
        "name": "Entrenador Personal",
        "price": "Gs. 30.000/sesi\u00f3n",
        "desc": "Seguimiento uno a uno",
        "duration": "45 min"
      }
    ]
  }
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-primary mb-2">Nuestros Servicios</h2>
        <p className="text-center text-foreground-light mb-12 max-w-xl mx-auto">Transformamos tu estilo con profesionalismo y dedicación</p>
        <div className="space-y-10">
          {cats.map((cat: any, ci: number) => (
            <div key={ci}>
              <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-secondary" /> {cat.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc: any, si: number) => (
                  <div key={si} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{svc.name}</h4>
                      <span className="text-secondary font-bold whitespace-nowrap ml-2">{svc.price}</span>
                    </div>
                    <p className="text-sm text-foreground-light">{svc.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-foreground-light">
                      <Clock className="w-3 h-3" /> {svc.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/595982292573?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20membres%C3%ADas%20de%20Bicho%27s%20Gym" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-md">
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
