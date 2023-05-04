export default function SelectComissao() {
  return (
    <>
      <label
        htmlFor="comissoes"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <select
        id="comissoes"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Data do pagamento</option>

        <option value="dv">Data da venda</option>
      </select>
    </>
  );
}
