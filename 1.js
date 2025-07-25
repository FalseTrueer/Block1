// 1. Простой объект (1 уровень вложенности)
const user = {
  id: 14,
  name: "Иван Иванов",
  isActive: true,
  age: 22,
  email: "ivan@example.com",
  lastLogin: null,
};

// 2. Объект средней сложности (2 уровня вложенности)
const company = {
  name: "ТехноЛаб",
  founded: 10,
  address: {
    city: "Москва",
    street: "Ленинский проспект",
    building: 15,
    zipCode: "119991",
  },
  contact: {
    phone: "+7 (495) 123-4567",
    email: "info@technolab.ru",
    isVerified: true,
  },
  isPartner: false,
};

// 3. Сложный объект (3+ уровня вложенности)
const university = {
  id: "UNIV-007",
  name: "Национальный Исследовательский Институт",
  rector: {
    fullName: "Петрова Мария Сергеевна",
    degree: {
      type: "доктор наук",
      field: "Компьютерные науки",
      year: 1,
      institution: {
        name: "МГУ",
        country: "Россия",
        accreditation: {
          level: "национальная",
          isValid: true,
          expiration: 2,
        },
      },
    },
    contact: {
      office: {
        building: "Главный корпус",
        room: 3,
        phone: "3456",
      },
      email: "rector@niin.ru",
    },
  },
  departments: {
    it: {
      head: "Сидоров Алексей Викторович",
      staffCount: 4,
    },
    engineering: {
      head: "Кузнецов Дмитрий Иванович",
      staffCount: 5,
    },
  },
};

function getSum(obj) {
  let sum = 0;

  for (const value of Object.values(obj)) {
    if (typeof value === "object" && value !== null) {
      sum += getSum(value);
    } else if (typeof value === "number") {
      sum += value;
    }
  }

  return sum;
}

console.log(getSum(user));
console.log(getSum(company));
console.log(getSum(university));
