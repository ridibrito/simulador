-- CreateTable
CREATE TABLE "Uf" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Uf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoProduto" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "TipoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoPlano" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "TipoPlano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administradora" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Administradora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entidade" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Entidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissao" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Profissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acomodacao" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Acomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abrangencia" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Abrangencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coparticipacao" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Coparticipacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reembolso" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Reembolso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planos" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Planos_pkey" PRIMARY KEY ("id")
);
