function Navbar() {
  return `
      <nav class="bg-gray-800 p-4 flex justify-between items-center">
          <div class="text-white font-bold">Art-Toy โว้ย</div>
          <div class="flex items-center">
              <input type="text" placeholder="Search..." class="p-2 rounded" />
              <button class="ml-4 bg-blue-500 text-white p-2 rounded">Login</button>
              <button class="ml-4 bg-green-500 text-white p-2 rounded">Contact</button>
              <button class="ml-4 bg-yellow-500 text-white p-2 rounded">Cart</button>
          </div>
      </nav>
  `;
}

export default Navbar;
