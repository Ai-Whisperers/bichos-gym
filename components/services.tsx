import { Clock, Dumbbell } from "lucide-react"

const cats = [{"name": "Membresías", "items": [{"name": "Plan Básico", "price": "Gs. 120.000/mes", "desc": "Acceso a sala de pesas y cardio", "duration": "Mensual"}, {"name": "Plan Premium", "price": "Gs. 200.000/mes", "desc": "Acceso total + clases dirigidas", "duration": "Mensual"}, {"name": "Plan Anual", "price": "Gs. 1.800.000/año", "desc": "Acceso total por 12 meses (3 meses gratis)", "duration": "Anual"}]}, {"name": "Clases", "items": [{"name": "Funcional", "price": "Incluido", "desc": "HIIT y entrenamiento funcional", "duration": "45 min"}, {"name": "Spinning", "price": "Incluido", "desc": "Ciclismo indoor de alto nivel", "duration": "45 min"}, {"name": "CrossFit", "price": "Incluido", "desc": "Entrenamiento de alta intensidad", "duration": "60 min"}, {"name": "Yoga", "price": "Incluido", "desc": "Clases de yoga para todos los niveles", "duration": "50 min"}]}, {"name": "Servicios", "items": [{"name": "Evaluación Física", "price": "Gratis", "desc": "Evaluación inicial para nuevos miembros", "duration": "30 min"}, {"name": "Rutina Personalizada", "price": "Incluida", "desc": "Plan de entrenamiento diseñado para vos", "duration": "—"}, {"name": "Nutrición", "price": "Gs. 50.000", "desc": "Consulta con nutricionista deportivo", "duration": "45 min"}]}]

export function Services() {
  return (
    <section className="py-20 bg-background" id="servicios">
      <div className="container-page">
        <h2 className="font-heading text-3xl font-bold text-center text-primary mb-2">Nuestros Servicios</h2>
        <p className="text-center text-foreground-light mb-12 max-w-xl mx-auto">Dale fuerte, transformá tu cuerpo</p>
        <div className="space-y-10">
          {cats.map((cat: any, ci: number) => (
            <div key={ci}>
              <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-secondary" /> {cat.name}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc: any, si: number) => (
                  <div key={si} className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:border-secondary/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{svc.name}</h4>
                      <span className="text-secondary font-bold whitespace-nowrap ml-2">{svc.price}</span>
                    </div>
                    <p className="text-sm text-foreground-light">{svc.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-foreground-muted">
                      <Clock className="w-3 h-3" /> {svc.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
