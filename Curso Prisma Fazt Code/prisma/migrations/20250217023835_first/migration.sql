-- CreateTable
CREATE TABLE "Videojuego" (
    "id_videojuego" SERIAL NOT NULL,
    "nombre" VARCHAR(500) NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL,
    "id_categoria" INTEGER NOT NULL,

    CONSTRAINT "Videojuego_pkey" PRIMARY KEY ("id_videojuego")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nombre_categoria" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- AddForeignKey
ALTER TABLE "Videojuego" ADD CONSTRAINT "Videojuego_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria"("id_categoria") ON DELETE CASCADE ON UPDATE CASCADE;
