import Footer from "@/components/ComponentsSimulador/Footer";
import ListSimulador from "@/components/ComponentsSimulador/ListSimulador";
import Navbar from "@/components/ComponentsSimulador/Navbar";
import SelectAbrangencia from "@/components/select/SelectAbrangencia";
import SelectAcomodacao from "@/components/select/SelectAcomodacao";
import SelectAdm from "@/components/select/SelectAdm";
import SelectCoparticipacao from "@/components/select/SelectCoparticpacao";
import SelectEntidade from "@/components/select/SelectEntidade";
import SelectProfissao from "@/components/select/SelectProfissao";
import SelectReembolso from "@/components/select/SelectReembolso";
import SelectTipoDePlano from "@/components/select/SelectTipoDePlano";
import SelectTipoDeProduto from "@/components/select/SelectTipoDeProduto";
import SelectCidade from "@/components/select/selectCidades";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Simulador() {
  const [minus, setMinus] = useState(true);
  const [minus1, setMinus1] = useState(true);
  const [minus2, setMinus2] = useState(true);
  const [minus3, setMinus3] = useState(true);
  const router = useRouter();

  const handleCloseMinus = () => {
    return setMinus(false);
  };
  const handleCloseMinus1 = () => {
    return setMinus1(false);
  };
  const handleCloseMinus2 = () => {
    return setMinus2(false);
  };
  const handleCloseMinus3 = () => {
    return setMinus3(false);
  };

  const handleOpenMinus = () => {
    return setMinus(true);
  };
  const handleOpenMinus1 = () => {
    return setMinus1(true);
  };
  const handleOpenMinus2 = () => {
    return setMinus2(true);
  };
  const handleOpenMinus3 = () => {
    return setMinus3(true);
  };

  const [faixa, setfaixa] = useState("");
  const [nomeLead, setNomeLead] = useState("");

  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <Navbar />

      <section className="pt-6 bg-gray-100">
        <div className="bg-white mx-auto max-w-7xl  rounded-lg shadow-md p-4 dark:bg-gray-800">
          <h2 className="block mb-2 text font-medium text-gray-900 dark:text-white">
            Nome do lead
          </h2>
          <input
            type="text"
            className="border h-8 rounded w-full pl-2 dark:bg-gray-800"
            onChange={(e) => setNomeLead(e.target.value)}
          />
        </div>
        <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
          <div className="flex items-center justify-between p-3 border-b ">
            <h2 className="block mb-2 text font-medium text-gray-900 dark:text-white">
              Selecione
            </h2>
            {minus ? (
              <svg
                onClick={handleCloseMinus}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 24"
                className="cursor-pointer"
              >
                <path d="M0 10h24v4h-24z" />
              </svg>
            ) : (
              <svg
                onClick={handleOpenMinus}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
              </svg>
            )}
          </div>

          <div className="block sm:flex gap-3 max-w-7xl my-4 pb-5 px-3 transition-all ease-in duration-500 dark:text-gray-500 ">
            <div
              className="sm:w-1/3"
              style={{ display: minus ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                UF
              </label>
              <SelectCidade />
            </div>
            <div
              className="sm:w-1/3"
              style={{ display: minus ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tipo de Produto
              </label>
              <SelectTipoDeProduto />
            </div>
            <div
              className="sm:w-1/3"
              style={{ display: minus ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tipo de Plano
              </label>
              <SelectTipoDePlano />
            </div>
          </div>
        </div>

        <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
          <div className="flex items-center justify-between p-3 border-b ">
            <h2 className="block mb-2 text font-medium text-gray-900 dark:text-white">
              Filtros adesão
            </h2>
            {minus1 ? (
              <svg
                onClick={handleCloseMinus1}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 24"
                className="cursor-pointer"
              >
                <path d="M0 10h24v4h-24z" />
              </svg>
            ) : (
              <svg
                onClick={handleOpenMinus1}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
              </svg>
            )}
          </div>

          <div className="block sm:flex w-full gap-3 max-w-7xl my-4 pb-5 dark:text-gray-500 ">
            <div
              className="sm:w-1/3"
              style={{ display: minus1 ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Administradora
              </label>
              <SelectAdm />
            </div>
            <div
              className="sm:w-1/3"
              style={{ display: minus1 ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Entidade
              </label>
              <SelectEntidade />
            </div>
            <div
              className="sm:w-1/3"
              style={{ display: minus1 ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Profissão
              </label>
              <SelectProfissao />
            </div>
          </div>
        </div>
        <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
          <div className="flex items-center justify-between p-3 border-b ">
            <h2 className="block mb-2 text font-medium text-gray-900 dark:text-white">
              Filtros
            </h2>
            {minus2 ? (
              <svg
                onClick={handleCloseMinus2}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 24"
                className="cursor-pointer"
              >
                <path d="M0 10h24v4h-24z" />
              </svg>
            ) : (
              <svg
                onClick={handleOpenMinus2}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
              </svg>
            )}
          </div>

          <div className="block sm:flex sm:w-full gap-3 sm:max-w-7xl my-4 pb-5 dark:text-gray-500 ">
            <div
              className="sm:w-1/4"
              style={{ display: minus2 ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Acomodação
              </label>
              <SelectAcomodacao />
            </div>
            <div
              className="sm:w-1/4"
              style={{ display: minus2 ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Abrangência
              </label>
              <SelectAbrangencia />
            </div>
            <div
              className="sm:w-1/4"
              style={{ display: minus2 ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Reembolso
              </label>
              <SelectReembolso />
            </div>
            <div
              className="sm:w-1/4"
              style={{ display: minus2 ? "block" : "none" }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Coparticipação
              </label>
              <SelectCoparticipacao />
            </div>
          </div>
        </div>

        <div className=" bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded px-3 shadow">
          <div className="flex items-center justify-between p-3 border-b ">
            <h2 className="block mb-2 text font-medium text-gray-900 dark:text-white">
              Faixas etárias
            </h2>
            {minus3 ? (
              <svg
                onClick={handleCloseMinus3}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 24"
                className="cursor-pointer"
              >
                <path d="M0 10h24v4h-24z" />
              </svg>
            ) : (
              <svg
                onClick={handleOpenMinus3}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
              </svg>
            )}
          </div>

          <div
            className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-11 gap-2"
            style={{ display: minus3 ? "grid" : "none" }}
          >
            <div className="w-full max-w-7xl mt-4 sm:mt-2 text-center dark:text-gray-500 ">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                00 a 18
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa1"
                name="faixa1"
              />
            </div>
            <div className="dark:text-gray-500  w-full max-w-7xl mt-4 sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                19 a 23
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa2"
                name="faixa2"
              />
            </div>
            <div className="dark:text-gray-500  w-full max-w-7xl mt-4 sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                24 a 28
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa3"
                name="faixa3"
              />
            </div>
            <div className="dark:text-gray-500  w-full max-w-7xl sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                29 a 33
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa4"
                name="faixa4"
              />
            </div>
            <div className="dark:text-gray-500 w-full max-w-7xl sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                34 a 38
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa5"
                name="faixa5"
              />
            </div>
            <div className="dark:text-gray-500  w-full max-w-7xl sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                39 a 43
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa6"
                name="faixa6"
              />
            </div>
            <div className="dark:text-gray-500  w-full max-w-7xl sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                44 a 48
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa7"
                name="faixa7"
              />
            </div>
            <div className="dark:text-gray-500  w-full max-w-7xl sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                49 a 53
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa8"
                name="faixa8"
              />
            </div>
            <div className="dark:text-gray-500 w-full max-w-7xl sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                54 a 58
              </label>
              <input
                className="dark:bg-gray-800 border w-24 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa9"
                name="faixa9"
              />
            </div>
            <div className="dark:text-gray-500 w-full gap-3 max-w-7xl sm:mt-2 text-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                59 +
              </label>
              <input
                className=" border w-24 dark:bg-gray-800 rounded text-center h-8"
                type="number"
                maxLength={2}
                onChange={(e) => setfaixa(e.target.value)}
                id="faixa10"
                name="faixa10"
              />
            </div>
            <div className="dark:text-gray-500 w-full gap-3 max-w-7xl sm:mt-2 text-center mb-4">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Total
              </label>
              <input
                className=" border w-24 rounded pl-4 text-center h-8 bg-gray-300"
                type="number"
                disabled={true}
                maxLength={2}
                value={faixa}
                id="total"
                name="total"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white dark:bg-gray-800 mt-4 mx-auto max-w-7xl rounded p-3 shadow gap-3 justify-center mb-5">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded px-8 py-3 text-white font-semibold"
            onClick={refreshPage}
          >
            Limpar
          </button>
          <button className="bg-sky-500 hover:bg-sky-600 rounded px-8 py-3 text-white font-semibold">
            Buscar
          </button>
        </div>

        <section className="block mx-auto ">
          <div className=" flex items-center max-w-7xl mx-auto justify-between bg-gray-300 rounded p-3 mb-2 px-4 dark:bg-gray-800">
            <h2 className="block text-sm font-medium text-gray-900 dark:text-white">
              Selecione uma operadora
            </h2>
            <h4 className="block text-sm font-medium text-gray-900 dark:text-white">
              Planos encontrados:qts planos
            </h4>
          </div>
          <ListSimulador />
          <div className="text-center flex justify-center mt-5 mb-28 ">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded  w-80 mx-2">
              Gerar cotação
            </button>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
