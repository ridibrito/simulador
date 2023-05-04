import Navbar from "@/components/ComponentsSimulador/Navbar";
import MetodoPagamento from "../../components/configPerfil/MetodoPagamento";
import PerfilUpdate from "../../components/configPerfil/PerfilUpdate";
import SeuPlano from "../../components/configPerfil/SeuPlano";

export default function MeuPerfil() {
  return (
    <>
      <Navbar />
      <div>
        <h2>Meu perfil</h2>
      </div>
      <section className="mt-3">
        <div className="bg-white dark:bg-gray-800 w-full rounded-lg shadow-md p-4">
          <PerfilUpdate />
        </div>
      </section>
    </>
  );
}
