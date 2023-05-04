export default function SelectAnalitico() {
  return (
    <>
      <label
        htmlFor="analitico"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <select
        id="analitico"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Quantidade de vendas</option>

        <option value="dv">Valor da comissão</option>
      </select>
    </>
  );
}
