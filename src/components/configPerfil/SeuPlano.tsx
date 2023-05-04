import Image from "next/image";

export default function SeuPlano() {
  return (
    <>
      <div>
        <h2>Seu plano</h2>
      </div>
      <div className="bg-white dark:bg-gray-800 w-full rounded-lg shadow-md px-4 py-8 mt-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-semibold">Plano Premium -</h2>
                <p className="text-sm">R$ 29,90por mês - 1 usuário</p>
              </div>
              <h3 className="text-sm">Vence em 05/05</h3>
            </div>
          </div>
          <div>
            <button className="text-sm bg-red-600 text-white rounded px-4 py-2 mr-3">
              Cancelar plano
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
