import Image from "next/image";

export default function MetodoPagamento() {
  return (
    <>
      <div>
        <h2>Método de pagamento</h2>
      </div>
      <div className="bg-white dark:bg-gray-800 w-full rounded-lg shadow-md p-4 mt-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src="/visa.jpg"
              width={80}
              height={80}
              alt="bandeira cartão"
            />
            <div>
              <h2 className="text-sm font-semibold">Visa ...0960</h2>
              <h3 className="text-sm">Vence em 03/2028</h3>
            </div>
          </div>
          <div>
            <button className="text-sm bg-sky-600 text-white rounded px-4 py-2 mr-3">
              Principal
            </button>
            <button className="text-sm border border-sky-600 text-sky-600 rounded px-4 py-2">
              Cobrar agora
            </button>
          </div>
        </div>
        <button className="font-semibold text-sm mt-10 bg-sky-600 text-white rounded px-6 py-3">
          Cadastrar cartão
        </button>
      </div>
    </>
  );
}
