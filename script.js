// ═══════════════════════════════════════════════
// DATOS DE VACANTES
// ═══════════════════════════════════════════════
const VACANTES = [
  {
    id: 1,
    cat: "gastro",
    title: "Cocinero A",
    location: "Hotel de Lujo - Bocagrande",
    salary: "$ 2.000.000 + Propinas",
    type: "Turnos Rotativos",
    img: "https://images.unsplash.com/photo-cQbOSRpElxw?auto=format&fit=crop&w=500&q=60",
    desc: "Pasion por la gastronomia caribena e internacional. Responsable de la preparacion de platos fuertes y manejo de parrilla.",
    reqs: [
      "Minimo 3 anos de experiencia.",
      "Tecnico en Cocina.",
      "Curso manipulacion alimentos vigente.",
    ],
    benefits: [
      "Alimentacion incluida.",
      "Estabilidad laboral.",
      "Contrato a termino indefinido.",
    ],
  },
  {
    id: 2,
    cat: "gastro",
    title: "Auxiliar de Cocina",
    location: "Restaurante Gourmet - Centro Historico",
    salary: "$ 1.900.000 + Propinas",
    type: "Tiempo Completo",
    img: "https://images.unsplash.com/photo-5IGprlBT5g4?auto=format&fit=crop&w=500&q=60",
    desc: "Apoyo en el mise en place y limpieza. Oportunidad de aprendizaje con chefs reconocidos.",
    reqs: [
      "1 ano de experiencia.",
      "Disponibilidad inmediata.",
      "Actitud proactiva.",
    ],
    benefits: [
      "Capacitacion constante.",
      "Transporte nocturno.",
      "Bonificacion por asistencia.",
    ],
  },
  {
    id: 3,
    cat: "hotel",
    title: "Auxiliar de Mantenimiento",
    location: "Hotel Radisson Cartagena - Bocagrande",
    salary: "$ 1.950.000 + Prestaciones",
    type: "Diurno",
    img: "https://images.unsplash.com/photo-dp78aU81-9o?auto=format&fit=crop&w=500&q=60",
    desc: "Mantenimiento preventivo locativo (pintura, drywall, plomeria basica). Reporte de novedades al jefe de mantenimiento.",
    reqs: [
      "Tecnico en mantenimiento.",
      "2 anos de experiencia.",
      "Curso alturas vigente.",
    ],
    benefits: [
      "Contrato directo con el hotel.",
      "Fondo de empleados.",
      "Seguro de vida.",
    ],
  },
  {
    id: 4,
    cat: "hotel",
    title: "Mesero Bilingue",
    location: "Hotel Boutique - Getsemani",
    salary: "$ 1.950.000 + Propinas",
    type: "Turnos Noche",
    img: "https://images.unsplash.com/photo-H9q_XcRpHNo?auto=format&fit=crop&w=500&q=60",
    desc: "Atencion a huespedes extranjeros y servicio a la mesa con altos estandares internacionales.",
    reqs: [
      "Ingles B2 certificado.",
      "Experiencia en servicio al cliente.",
      "Excelente presentacion personal.",
    ],
    benefits: [
      "Propinas en dolares.",
      "Uniformes de diseno.",
      "Prima de idioma.",
    ],
  },
  {
    id: 5,
    cat: "hotel",
    title: "Camarera de Pisos",
    location: "Cadena Hotelera Internacional",
    salary: "$ 1.850.000 + Incentivos",
    type: "Turno Manana",
    img: "https://images.unsplash.com/photo-BKmJD9WmuA8?auto=format&fit=crop&w=500&q=60",
    desc: "Limpieza y preparacion de habitaciones segun estandares de calidad internacional. Reporte de novedades.",
    reqs: [
      "6 meses de experiencia.",
      "Honestidad y atencion al detalle.",
      "Disponibilidad fines de semana.",
    ],
    benefits: [
      "Pago quincenal.",
      "Auxilio de transporte.",
      "Bonos de productividad.",
    ],
  },
  {
    id: 6,
    cat: "hotel",
    title: "Recepcionista Bilingue",
    location: "Hotel Playa Cartagena",
    salary: "$ 2.100.000",
    type: "Rotativo",
    img: "https://images.unsplash.com/photo-7abDBJ9bylA?auto=format&fit=crop&w=500&q=60",
    desc: "Check-in / check-out, manejo de reservas y atencion integral al huesped nacional e internacional.",
    reqs: [
      "Tecnologo en Hoteleria o Turismo.",
      "Ingles C1.",
      "Manejo de software hotelero Zeus.",
    ],
    benefits: [
      "Recargos nocturnos y dominicales.",
      "Comisiones por ventas.",
      "Plan carrera.",
    ],
  },
  {
    id: 7,
    cat: "admin",
    title: "Gerente de Operaciones Hoteleras",
    location: "Grupo Hotelero - Cartagena",
    salary: "$ 5.500.000",
    type: "Tiempo Completo",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=60",
    desc: "Planificacion y control de operaciones del establecimiento. Liderazgo de equipos multidisciplinarios.",
    reqs: [
      "Profesional en Administracion o Hoteleria.",
      "5 anos de experiencia en cargos similares.",
      "Ingles Avanzado.",
    ],
    benefits: [
      "Bonos por resultados.",
      "Seguro medico privado.",
      "Subsidio de vivienda.",
    ],
  },
  {
    id: 8,
    cat: "gastro",
    title: "Bartender Profesional",
    location: "Rooftop Bar Exclusivo - Centro",
    salary: "$ 1.800.000 + Propinas",
    type: "Turno Noche",
    img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=500&q=60",
    desc: "Preparacion de cocteleria de autor y clasica. Atencion en barra con altos estandares.",
    reqs: [
      "2 anos de experiencia en barra.",
      "Conocimiento en mixologia.",
      "Carisma y excelente presentacion.",
    ],
    benefits: [
      "Propinas elevadas.",
      "Ambiente de trabajo dinamico.",
      "Capacitacion en nuevas tecnicas.",
    ],
  },
  {
    id: 9,
    cat: "turismo",
    title: "Guia Turistico Bilingue",
    location: "Agencia Premium - Centro Historico",
    salary: "$ 2.200.000 + Comisiones",
    type: "Freelance / Contrato",
    img: "https://images.unsplash.com/photo-QLGcuQgsJFo?auto=format&fit=crop&w=500&q=60",
    desc: "Acompanamiento a grupos de turistas nacionales e internacionales. Historia, cultura y gastronomia caribena.",
    reqs: [
      "Tarjeta Profesional de Guia.",
      "Ingles C1 o superior.",
      "Profundo conocimiento historico de Cartagena.",
    ],
    benefits: [
      "Comisiones por ventas adicionales.",
      "Horarios flexibles.",
      "Red de contactos internacionales.",
    ],
  },
  {
    id: 10,
    cat: "hotel",
    title: "Botones / Bellboy",
    location: "Hotel 5 Estrellas - Bocagrande",
    salary: "$ 1.900.000 + Propinas",
    type: "Rotativo",
    img: "https://images.unsplash.com/photo-lngK-Hh9QlI?auto=format&fit=crop&w=500&q=60",
    desc: "Recepcion, transporte de equipaje y asistencia integral al huesped desde su llegada.",
    reqs: [
      "Experiencia en atencion al cliente.",
      "Proactividad y disposicion de servicio.",
      "Buena condicion fisica.",
    ],
    benefits: [
      "Propinas diarias.",
      "Alimentacion en turno.",
      "Contrato con prestaciones.",
    ],
  },
  {
    id: 11,
    cat: "turismo",
    title: "Coordinador de Eventos MICE",
    location: "Centro de Convenciones - Cartagena",
    salary: "$ 3.200.000",
    type: "Tiempo Completo",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=60",
    desc: "Coordinacion de congresos, ferias y eventos corporativos. Liaison con proveedores y clientes.",
    reqs: [
      "Profesional en Relaciones Publicas o Administracion.",
      "3 anos en organizacion de eventos.",
      "Ingles B2.",
    ],
    benefits: [
      "Bonos por evento.",
      "Beneficios corporativos.",
      "Posibilidad de viajes.",
    ],
  },
  {
    id: 12,
    cat: "admin",
    title: "Auxiliar Administrativo y de RRHH",
    location: "Empresa de Servicios - Cartagena",
    salary: "$ 1.800.000",
    type: "Tiempo Completo",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=60",
    desc: "Apoyo en procesos de seleccion, archivo documental, nomina y gestion de contratos de personal.",
    reqs: [
      "Tecnologo o Profesional en Administracion.",
      "Manejo de Excel avanzado.",
      "Experiencia minima 1 ano.",
    ],
    benefits: [
      "Estabilidad laboral.",
      "Capacitacion en software.",
      "Horario de oficina.",
    ],
  },
];

// ═══════════════════════════════════════════════
// ARTICULOS DE BLOG
// ═══════════════════════════════════════════════
const ARTICLES = {
  art1: {
    tag: "Mercado Laboral",
    tagClass: "bg-brand-100 text-brand-700",
    html: `
            <h2 class="font-display text-2xl font-bold text-brand-900 mb-4 leading-tight">El Turismo en Cartagena Genera Mas de 90.000 Empleos Directos — y la Demanda Crece</h2>
            <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6"><span>Marzo 2025</span><span>·</span><span>5 min de lectura</span><span>·</span><span>Fuente: ProColombia / Camara de Comercio de Cartagena</span></div>
            <div class="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>La actividad turistica en Cartagena de Indias sigue siendo el principal motor de empleo formal de la ciudad. Segun el informe <strong>"Boletin de Estadisticas Turisticas de Cartagena"</strong> publicado por el IPCC (Instituto de Patrimonio y Cultura de Cartagena) y con datos consolidados por <strong>ProColombia</strong>, el turismo receptor generó mas de 90.000 empleos directos en 2023, con proyeccion de crecimiento del 12% para 2025.</p>
                <p>El segmento de mayor dinamismo es la hoteleria boutique en los barrios Getsemani y el Centro Historico, donde la demanda de personal calificado —especialmente bilingue— supera con creces la oferta disponible. La <strong>Camara de Comercio de Cartagena</strong>, en su "Informe de Desempeno Empresarial 2023-2024", reporto que el 68% de las empresas del sector turismo declaro dificultades para encontrar personal con el perfil adecuado.</p>
                <p>El turismo de reuniones (MICE) tambien se consolida: segun datos del <strong>Cartagena Convention Bureau</strong>, la ciudad recibio 412 eventos de talla internacional en 2024, generando una demanda adicional de personal temporal altamente capacitado para roles de logistica, traduccion y coordinacion de eventos.</p>
                <p>Para las empresas del sector, esto significa que la competencia por el talento es cada vez mayor y que invertir en estrategias de retencion no es un lujo, sino una necesidad operativa. Para los candidatos, significa que las oportunidades son amplias — pero que la diferenciacion (idiomas, certificaciones, experiencia especifica) define quienes acceden a los mejores empleos.</p>
                <h3 class="font-bold text-brand-900 text-base mt-6 mb-2">El Reto de la Rotacion</h3>
                <p>La misma Camara de Comercio ha documentado que la rotacion en el sector servicios de Cartagena supera el <strong>35% anual</strong>, lo que representa un costo promedio de entre 1.5 y 3 salarios mensuales por cada empleado que sale y debe ser reemplazado. Para un hotel de 50 empleados, esto puede significar inversiones anuales de 50 a 150 millones de pesos solo en procesos de seleccion e induccion.</p>
                <p>La solucion no pasa solo por pagar mas. Segun el estudio <em>"Factores de Permanencia Laboral en el Sector Turistico Colombiano"</em> presentado en el Congreso de Turismo de 2024, el 54% de quienes abandonaron un empleo hotelero en Cartagena en el ultimo ano lo hicieron por razones relacionadas con el clima organizacional, no por el salario.</p>
            </div>`,
  },
  art2: {
    tag: "Gastronomia & Empleo",
    tagClass: "bg-amber-100 text-amber-700",
    html: `
            <h2 class="font-display text-2xl font-bold text-brand-900 mb-4 leading-tight">La Escena Gastronomica de Cartagena Busca Perfiles Tecnicos: Que Piden los Restaurantes en 2025</h2>
            <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6"><span>Febrero 2025</span><span>·</span><span>4 min</span><span>·</span><span>Fuente: El Universal Cartagena / Camara de Comercio</span></div>
            <div class="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>El diario <strong>El Universal de Cartagena</strong> reporto en enero de 2025 que la ciudad registro la apertura de mas de 80 nuevos establecimientos de alimentos y bebidas durante 2024, consolidando un ecosistema gastronomico que ya rivaliza con ciudades como Medellin y Bogota en terminos de innovacion culinaria.</p>
                <p>Eventos como el <strong>Cartagena Gourmet</strong> y el crecimiento de la oferta en barrios como Getsemani y La Boquilla han elevado el estandar del servicio gastronomico en la ciudad. Las empresas ya no solo buscan cocineros: buscan <em>tecnicos de cocina</em> con formacion certificada, conocimiento en tendencias culinarias y capacidad para trabajar bajo presion en servicio de alta rotacion.</p>
                <p>Los perfiles mas buscados segun el analisis de vacantes activas en el primer trimestre de 2025 son: chefs pasteleros (demanda 300% mayor que la oferta), sous chefs con experiencia en cocina de autor, y bartenders con conocimiento en mixologia molecular.</p>
                <p>La recomendacion para candidatos del sector: certificaciones del SENA en manipulacion de alimentos y tecnicas culinarias siguen siendo el piso minimo. Lo que diferencia a los candidatos seleccionados es la experiencia en establecimientos con volumen alto de turistas internacionales y la disposicion para trabajar en turnos rotativos.</p>
            </div>`,
  },
  art3: {
    tag: "Consejos para Candidatos",
    tagClass: "bg-teal-100 text-teal-700",
    html: `
            <h2 class="font-display text-2xl font-bold text-brand-900 mb-4 leading-tight">Como Preparar tu Hoja de Vida para el Sector Hotelero de Cartagena: Guia Practica</h2>
            <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6"><span>Enero 2025</span><span>·</span><span>6 min</span></div>
            <div class="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>Cada semana recibimos decenas de hojas de vida en Tu Mejor Talento Humano. Despues de anos de trabajo en seleccion para el sector hotelero de Cartagena, hemos identificado los errores mas comunes que hacen que un candidato sea descartado — y como corregirlos.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">1. Sé especifico en tu experiencia</h3>
                <p>No basta con escribir "Cocinero en Hotel XYZ". El reclutador quiere saber: cuantas habitaciones tenia el hotel, cuantas personas atendias por turno, que tipo de cocina manejabas. La especificidad genera confianza.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">2. Certifica tus idiomas</h3>
                <p>El ingles "conversacional" sin respaldo no tiene peso. Un certificado B1 o B2 del British Council, la Universidad del Norte o incluso una prueba estandarizada le da credibilidad a tu perfil y puede significar hasta un 40% mas de salario.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">3. Incluye logros medibles</h3>
                <p>Si redujiste el tiempo de servicio, si aumentaste la satisfaccion de los huespedes, si implementaste algun proceso: ponlo con numeros. "Reduje el tiempo de check-in de 8 a 4 minutos en promedio" dice mucho mas que "eficiente en recepcion".</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">4. Formato limpio y una sola pagina</h3>
                <p>En el sector hotelero, los reclutadores revisan una hoja de vida en menos de 30 segundos. Una sola pagina, letra legible (minimo 11pt), sin colores innecesarios. Profesional, no llamativo.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">5. Carta de presentacion corta y personalizada</h3>
                <p>Un parrafo que explique por que te interesa ese establecimiento especifico puede ser el diferencial definitivo. Demostrar que conoces el hotel o restaurante donde aplicas comunica compromiso.</p>
            </div>`,
  },
  art4: {
    tag: "Cruceros & Nautico",
    tagClass: "bg-sky-100 text-sky-700",
    html: `
            <h2 class="font-display text-2xl font-bold text-brand-900 mb-4 leading-tight">Cartagena y el Boom de los Cruceros: Empleo en el Puerto Mas Visitado del Caribe</h2>
            <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6"><span>Diciembre 2024</span><span>·</span><span>5 min</span><span>·</span><span>Fuente: SPRC / El Tiempo Caribe</span></div>
            <div class="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>La <strong>Sociedad Portuaria Regional de Cartagena (SPRC)</strong> reporto que en la temporada 2023-2024 arribo un total de 387 barcos de crucero con mas de 630.000 pasajeros, cifra que representa un crecimiento del 22% respecto al periodo anterior. Para la temporada 2024-2025, la proyeccion es superar las 420 escalas.</p>
                <p>Cada crucero que atraca en Cartagena genera demanda directa de: guias turisticos, conductores de transporte ejecutivo, operadores de tour, vendedores bilingues en el Centro Historico, personal de F&B en los puertos de embarque, y coordinadores de excursiones.</p>
                <p>El diario <strong>El Tiempo</strong> en su edicion regional publico en noviembre de 2024 que el sector de servicios al turista de crucero genera aproximadamente 8.500 empleos directos en Cartagena durante la temporada alta (octubre a abril).</p>
                <p>Para quienes buscan oportunidades en este segmento, la clave es: ingles fluido (minimo B2), tarjeta profesional de guia (para guias), y disponibilidad de lunes a domingo durante la temporada. Los ingresos, combinando salario base mas comisiones y propinas en dolares, pueden superar los 3 millones de pesos mensuales para perfiles bilingues.</p>
            </div>`,
  },
  art5: {
    tag: "Analisis Salarial",
    tagClass: "bg-violet-100 text-violet-700",
    html: `
            <h2 class="font-display text-2xl font-bold text-brand-900 mb-4 leading-tight">El Ingles como Ventaja Diferencial: Cuanto Mas Gana Quien es Bilingue en Turismo en Cartagena</h2>
            <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6"><span>Noviembre 2024</span><span>·</span><span>4 min</span></div>
            <div class="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>Un analisis interno de las vacantes gestionadas por Tu Mejor Talento Humano durante 2024 revela que los candidatos con certificacion B2 o superior en ingles acceden a salarios que superan entre un <strong>30% y un 60%</strong> a los de sus pares monolingues en el mismo cargo.</p>
                <p>Un recepcionista hotelero sin ingles: entre $1.400.000 y $1.600.000 mensuales. El mismo perfil con ingles C1: entre $2.000.000 y $2.400.000, mas prima de idioma en varios establecimientos.</p>
                <p>Un mesero sin idioma: $1.300.000 - $1.500.000 + propinas en pesos. Con ingles B2: $1.600.000 - $1.800.000 + propinas en dolares de turistas internacionales, lo que puede representar un ingreso real mensual superior a $2.500.000.</p>
                <p>La brecha es incluso mayor en cargos de coordinacion y gerencia, donde el ingles avanzado es un requisito no negociable para grupos hoteleros con estandares internacionales.</p>
                <p><strong>Donde aprender:</strong> El SENA Cartagena ofrece cursos gratuitos de ingles para el trabajo. La Universidad de Cartagena y la Universidad del Norte tienen programas de extension de bajo costo. Plataformas como Duolingo y Babbel son complementarias pero no suficientes para certificar tu nivel.</p>
            </div>`,
  },
  art6: {
    tag: "Para Empresas",
    tagClass: "bg-rose-100 text-rose-700",
    html: `
            <h2 class="font-display text-2xl font-bold text-brand-900 mb-4 leading-tight">Por Que Sus Empleados Renuncian: Las 5 Causas Reales de la Rotacion en Hoteles de Cartagena</h2>
            <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6"><span>Octubre 2024</span><span>·</span><span>7 min</span><span>·</span><span>Fuente: Camara de Comercio / Analisis interno</span></div>
            <div class="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>Despues de gestionar mas de 120 colocaciones en el sector turistico de Cartagena, y de hacer seguimiento a los procesos de desvinculacion de decenas de trabajadores, identificamos las 5 razones reales por las cuales los empleados abandonan sus puestos.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">1. Jefatura directa deficiente (38% de los casos)</h3>
                <p>El dicho es cierto: la gente no renuncia a la empresa, renuncia al jefe. Trato irrespetuoso, falta de reconocimiento y comunicacion vertical rigida son las principales quejas de los colaboradores que se van.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">2. Promesas incumplidas en el proceso de seleccion (24%)</h3>
                <p>Cuando el cargo real no coincide con lo que se ofrecio, la decepcion es inmediata. La honestidad en la descripcion del puesto desde la seleccion es fundamental para la permanencia.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">3. Falta de oportunidades de desarrollo (18%)</h3>
                <p>Los jovenes talentos abandonan si no ven un camino de crecimiento. Un plan carrera claro, aunque sea sencillo, genera compromisos de largo plazo.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">4. Problemas con los turnos y la vida personal (13%)</h3>
                <p>La inflexibilidad absoluta en los horarios, especialmente para quienes tienen hijos, es un factor silencioso de rotacion que muchos gerentes subestiman.</p>
                <h3 class="font-bold text-brand-900 text-base mt-4 mb-2">5. Salario por debajo del mercado (7%)</h3>
                <p>Contrario a lo que muchos creen, el salario ocupa el ultimo lugar en las causas de renuncia — siempre y cuando este en el rango de mercado. Pagar por debajo si genera salida inmediata.</p>
            </div>`,
  },
  art7: {
    tag: "Formacion",
    tagClass: "bg-green-100 text-green-700",
    html: `
            <h2 class="font-display text-2xl font-bold text-brand-900 mb-4 leading-tight">SENA Cartagena y la Formacion Tecnica en Empleo Turistico: Que Programas Dan Resultado</h2>
            <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6"><span>Septiembre 2024</span><span>·</span><span>5 min</span><span>·</span><span>Fuente: SENA Regional Bolivar / El Universal Cartagena</span></div>
            <div class="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>El <strong>SENA Regional Bolivar</strong> forma anualmente a cerca de 15.000 aprendices en su sede de Cartagena, de los cuales aproximadamente el 35% corresponde a programas relacionados con turismo, hoteleria y gastronomia. Segun datos propios del SENA publicados en 2024, la tasa de empleabilidad de sus egresados en el sector turistico es del 71% dentro de los primeros 6 meses post-egreso.</p>
                <p>Los programas con mayor demanda por parte de las empresas del sector en Cartagena son:</p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                    <li><strong>Tecnologo en Gestion Hotelera y de Alojamiento:</strong> el mas solicitado por cadenas internacionales. Duracion 3 anos.</li>
                    <li><strong>Tecnico en Cocina:</strong> alta demanda, especialmente para el segmento de restaurantes gourmet. Duracion 2 anos.</li>
                    <li><strong>Tecnico en Servicios de Restaurante y Bar:</strong> perfil muy buscado para hoteles de 4 y 5 estrellas.</li>
                    <li><strong>Tecnologo en Gestion Empresarial de Turismo:</strong> orientado a agencias y operadores turisticos.</li>
                </ul>
                <p>El diario <strong>El Universal de Cartagena</strong> destaco en agosto de 2024 que la alianza entre el SENA y el Cluster de Turismo de Cartagena ha permitido adaptar los programas formativos a las necesidades reales de las empresas, incluyendo pasantias remuneradas en hoteles de Bocagrande y el Centro Historico.</p>
                <p>Para los candidatos que ya egresaron del SENA, la recomendacion es complementar la formacion con: certificaciones de idiomas, cursos cortos en plataformas internacionales (Coursera, edX) y practicas en establecimientos de alta exigencia para construir un perfil competitivo.</p>
            </div>`,
  },
};

// ═══════════════════════════════════════════════
// ESTADO DE FILTROS
// ═══════════════════════════════════════════════
let currentCat = "all";

// ═══════════════════════════════════════════════
// RENDER VACANTES
// ═══════════════════════════════════════════════
function renderVacantes() {
  const container = document.getElementById("vacantes-container");
  const homeContainer = document.getElementById("vacantes-home");
  if (container)
    container.innerHTML = VACANTES.map((v) => createCard(v)).join("");
  if (homeContainer)
    homeContainer.innerHTML = VACANTES.slice(0, 4)
      .map((v) => createCard(v))
      .join("");
  updateJobCount();
  lucide.createIcons();
}

function createCard(v) {
  const catLabel =
    {
      hotel: "Hoteleria",
      gastro: "Gastronomia",
      turismo: "Turismo",
      admin: "Administrativo",
    }[v.cat] || v.cat;
  const catColors = {
    hotel: "bg-brand-100 text-brand-700",
    gastro: "bg-amber-100 text-amber-700",
    turismo: "bg-teal-100 text-teal-700",
    admin: "bg-violet-100 text-violet-700",
  };
  const chipCls = catColors[v.cat] || "bg-slate-100 text-slate-700";
  return `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover-card cursor-pointer group" data-cat="${v.cat}" data-title="${v.title.toLowerCase()} ${v.location.toLowerCase()}" onclick="openModal(${v.id})">
        <div class="h-44 overflow-hidden relative">
            <img src="${v.img}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${v.title}">
            <div class="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent"></div>
            <span class="absolute top-3 left-3 cat-chip ${chipCls} text-[10px]">${catLabel}</span>
            <span class="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-teal-700 uppercase tracking-wider shadow-sm">Disponible</span>
        </div>
        <div class="p-5">
            <h3 class="font-bold text-base text-slate-800 mb-1 line-clamp-1 group-hover:text-brand-700 transition-colors">${v.title}</h3>
            <p class="text-xs text-slate-500 mb-3 line-clamp-1">${v.location}</p>
            <div class="flex items-center gap-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-4">
                <i data-lucide="dollar-sign" class="w-3.5 h-3.5 text-green-600 shrink-0"></i>
                <span class="font-bold text-slate-700">${v.salary}</span>
            </div>
            <button class="w-full py-2.5 bg-brand-700 hover:bg-brand-900 text-white rounded font-semibold text-xs transition-colors">
                Ver Detalles y Aplicar
            </button>
        </div>
    </div>`;
}

// ═══════════════════════════════════════════════
// FILTROS VACANTES
// ═══════════════════════════════════════════════
function filterVacantes() {
  const q = (document.getElementById("job-search")?.value || "").toLowerCase();
  const cards = document.querySelectorAll("#vacantes-container > div");
  let visible = 0;
  cards.forEach((card) => {
    const matchCat = currentCat === "all" || card.dataset.cat === currentCat;
    const matchQuery = !q || card.dataset.title.includes(q);
    const show = matchCat && matchQuery;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });
  updateJobCount(visible);
  const noResults = document.getElementById("no-results");
  if (noResults) noResults.classList.toggle("hidden", visible > 0);
}

function setCatFilter(btn, cat) {
  currentCat = cat;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  filterVacantes();
}

function updateJobCount(count) {
  const el = document.getElementById("jobs-count");
  if (!el) return;
  const total = count !== undefined ? count : VACANTES.length;
  el.textContent = `Mostrando ${total} vacante${total !== 1 ? "s" : ""} activa${total !== 1 ? "s" : ""}`;
}

// ═══════════════════════════════════════════════
// MODAL VACANTE
// ═══════════════════════════════════════════════
function openModal(id) {
  const v = VACANTES.find((j) => j.id === id);
  if (!v) return;
  const catLabel =
    {
      hotel: "Hoteleria",
      gastro: "Gastronomia",
      turismo: "Turismo",
      admin: "Administrativo",
    }[v.cat] || v.cat;
  document.getElementById("modal-img").src = v.img;
  document.getElementById("modal-title").textContent = v.title;
  document.getElementById("modal-location").textContent = v.location;
  document.getElementById("modal-salary").textContent = v.salary;
  document.getElementById("modal-type").textContent = v.type;
  document.getElementById("modal-desc").textContent = v.desc;
  document.getElementById("modal-cat-badge").textContent = catLabel;
  document.getElementById("modal-job-id").value = v.id;
  document.getElementById("modal-reqs").innerHTML = v.reqs
    .map((r) => `<li>${r}</li>`)
    .join("");
  document.getElementById("modal-benefits").innerHTML = v.benefits
    .map((b) => `<li>${b}</li>`)
    .join("");
  const modal = document.getElementById("job-modal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeModal() {
  document.getElementById("job-modal").style.display = "none";
  document.body.style.overflow = "";
}

function submitApplication(e) {
  e.preventDefault();
  const id = document.getElementById("modal-job-id").value;
  const name = document.getElementById("apply-name").value;
  const phone = document.getElementById("apply-phone").value;
  const v = VACANTES.find((j) => j.id == id);
  closeModal();
  const wa = `https://wa.me/573163030589?text=Hola%2C%20soy%20${encodeURIComponent(name)}%20y%20me%20interesa%20la%20vacante%20de%20${encodeURIComponent(v ? v.title : "vacante")}%20en%20Tu%20Mejor%20Talento%20Humano.%20Mi%20celular%20es%20${encodeURIComponent(phone)}.`;
  window.open(wa, "_blank", "noopener");
}

// ═══════════════════════════════════════════════
// MODAL ARTICULO BLOG
// ═══════════════════════════════════════════════
function openArticle(key) {
  const art = ARTICLES[key];
  if (!art) return;
  document.getElementById("art-tag").textContent = art.tag;
  document.getElementById("art-tag").className =
    `blog-tag ${art.tagClass} text-[11px]`;
  document.getElementById("art-body").innerHTML = art.html;
  const modal = document.getElementById("article-modal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeArticle() {
  document.getElementById("article-modal").style.display = "none";
  document.body.style.overflow = "";
}

// Close modals on backdrop click
document.addEventListener("click", function (e) {
  const jobModal = document.getElementById("job-modal");
  const artModal = document.getElementById("article-modal");
  if (e.target === jobModal) closeModal();
  if (e.target === artModal) closeArticle();
});

// ESC key closes modals
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
    closeArticle();
  }
});

// ═══════════════════════════════════════════════
// NAVEGACION
// ═══════════════════════════════════════════════
function navigateTo(viewId) {
  document.querySelectorAll('div[id^="view-"]').forEach((el) => {
    el.classList.add("hidden-section");
    el.classList.remove("active-section");
  });
  const target = document.getElementById("view-" + viewId);
  if (target) {
    target.classList.remove("hidden-section");
    target.classList.add("active-section");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // Close mobile menu
  const mm = document.getElementById("mobile-menu");
  if (mm) {
    mm.style.maxHeight = "0";
    mm.classList.remove("open");
  }
  // Update active nav link
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));
  const nl = document.getElementById("nl-" + viewId);
  if (nl) nl.classList.add("active");
  // Re-render vacantes when navigating to jobs
  if (viewId === "jobs") {
    filterVacantes();
  }
}

function toggleMobileMenu() {
  const mm = document.getElementById("mobile-menu");
  if (mm.classList.contains("open")) {
    mm.classList.remove("open");
    mm.style.maxHeight = "0";
  } else {
    mm.classList.add("open");
    mm.style.maxHeight = mm.scrollHeight + "px";
  }
}

// ═══════════════════════════════════════════════
// FORM CONTACTO
// ═══════════════════════════════════════════════
function submitContactForm(e) {
  e.preventDefault();
  const form = document.getElementById("contact-form");
  const name = form.querySelector('[name="name"]').value;
  const type = form.querySelector('[name="type"]').value;
  const msg = form.querySelector('[name="message"]').value;
  const wa = `https://wa.me/573163030589?text=Hola%20Nohemi%2C%20soy%20${encodeURIComponent(name)}.%20Consulta%3A%20${encodeURIComponent(type)}.%20${encodeURIComponent(msg)}`;
  window.open(wa, "_blank", "noopener");
  form.innerHTML = `<div class="text-center py-10"><div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"><i data-lucide="check-circle-2" class="w-8 h-8 text-teal-600"></i></div><h3 class="font-bold text-brand-900 text-xl mb-2">Mensaje Enviado</h3><p class="text-slate-500 text-sm">Te redirigimos a WhatsApp. Si no se abrio automaticamente, escribe al +57 316 303 0589.</p></div>`;
  lucide.createIcons();
}

// ═══════════════════════════════════════════════
// BACK TO TOP & NAV SCROLL BEHAVIOR
// ═══════════════════════════════════════════════
window.addEventListener(
  "scroll",
  () => {
    const btn = document.getElementById("back-to-top");
    if (btn) btn.classList.toggle("visible", window.scrollY > 400);
    const nav = document.getElementById("main-nav");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 60);
  },
  { passive: true },
);

// ═══════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  // Auto-apply reveal to cards and section headings
  document
    .querySelectorAll(".hover-card, .testimonial-card")
    .forEach((el, i) => {
      if (!el.classList.contains("reveal")) {
        el.classList.add("reveal");
        const mod = i % 3;
        if (mod === 1) el.classList.add("delay-1");
        else if (mod === 2) el.classList.add("delay-2");
      }
    });
  document
    .querySelectorAll(
      "section .text-center.max-w-2xl, section .text-center.max-w-xl",
    )
    .forEach((el) => {
      if (!el.classList.contains("reveal")) el.classList.add("reveal");
    });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ═══════════════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════════════
function initCounters() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const duration = 1500;
        const startTime = performance.now();
        function tick(now) {
          const t = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
          el.textContent = prefix + Math.round(eased * target) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );
  document.querySelectorAll(".count-up").forEach((el) => obs.observe(el));
}

// ═══════════════════════════════════════════════
// INICIALIZACION
// ═══════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  renderVacantes();
  document.getElementById("nl-home")?.classList.add("active");
  // Init nav scroll state on load (in case page was refreshed mid-scroll)
  if (window.scrollY > 60)
    document.getElementById("main-nav")?.classList.add("scrolled");
  // Init animations after a microtask so DOM is fully painted
  setTimeout(() => {
    initScrollReveal();
    initCounters();
  }, 0);
});
