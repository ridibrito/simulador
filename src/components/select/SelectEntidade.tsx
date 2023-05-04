export default function SelectEntidade() {
  return (
    <select
      id="operadoras"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>ASPB</option>
      <option value="dv">ABRACEM</option>
      <option value="dv">ASPROBILI</option>
      <option value="dv">ASPROFILI</option>
    </select>
  );
}
