import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

function Index() {
  const services = [
    {
      icon: 'Home',
      title: 'Квартиры под ключ',
      description: 'Полная отделка квартир от черновой до чистовой отделки',
      price: 'от 15 000 ₽/м²'
    },
    {
      icon: 'Building',
      title: 'Офисные помещения',
      description: 'Создание современных рабочих пространств',
      price: 'от 12 000 ₽/м²'
    },
    {
      icon: 'Palette',
      title: 'Дизайн интерьера',
      description: 'Индивидуальный дизайн-проект и авторский надзор',
      price: 'от 3 000 ₽/м²'
    },
    {
      icon: 'Wrench',
      title: 'Капитальный ремонт',
      description: 'Перепланировка и полная реконструкция помещений',
      price: 'от 18 000 ₽/м²'
    }
  ];

  const portfolio = [
    {
      image: '/img/5de52c74-95ab-42ec-bbb7-8ad3b128553a.jpg',
      title: 'Современная гостиная',
      description: '120 м² • 3 месяца',
      category: 'Квартира'
    },
    {
      image: '/img/b29aae6f-5a76-4a3d-8675-23820ef6b41c.jpg',
      title: 'Стильная кухня',
      description: '25 м² • 1 месяц',
      category: 'Кухня'
    },
    {
      image: '/img/6a505fcd-a2eb-49b6-b3bf-17df342702b4.jpg',
      title: 'Премиум ванная',
      description: '15 м² • 3 недели',
      category: 'Ванная'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Консультация и замер',
      description: 'Бесплатный выезд специалиста, обсуждение пожеланий и составление предварительной сметы',
      time: '1-2 дня'
    },
    {
      number: 2,
      title: 'Проект и договор',
      description: 'Создание дизайн-проекта, подписание договора с фиксированными сроками и ценами',
      time: '5-7 дней'
    },
    {
      number: 3,
      title: 'Подготовительные работы',
      description: 'Демонтаж, подготовка поверхностей, прокладка коммуникаций',
      time: '1-2 недели'
    },
    {
      number: 4,
      title: 'Черновая отделка',
      description: 'Выравнивание стен и потолков, стяжка пола, установка окон и дверей',
      time: '2-3 недели'
    },
    {
      number: 5,
      title: 'Чистовая отделка',
      description: 'Финишные покрытия, установка сантехники, электрики, мебели',
      time: '2-4 недели'
    },
    {
      number: 6,
      title: 'Сдача объекта',
      description: 'Финальная уборка, проверка качества всех работ, передача гарантийных документов',
      time: '1 день'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-montserrat font-bold text-2xl text-secondary">
            Маляр.PRO
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-secondary hover:text-primary transition-colors">Портфолио</a>
            <a href="#steps" className="text-secondary hover:text-primary transition-colors">Этапы</a>
            <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/img/7ee479f9-b37e-471d-91a2-15229aa56793.jpg" 
            alt="Профессиональный маляр с безвоздушным распылителем" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
              Отделочные работы
              <span className="text-primary block">под ключ</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Превратим ваше пространство в место мечты. Современный дизайн, качественные материалы, 
              соблюдение сроков и гарантия результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Image" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">500+</div>
              <div className="text-white/90 drop-shadow-md">Завершённых проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">7</div>
              <div className="text-white/90 drop-shadow-md">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">100%</div>
              <div className="text-white/90 drop-shadow-md">Экологичные краски</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-renovation-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-renovation-gray text-lg max-w-2xl mx-auto">
              Полный спектр отделочных работ для создания современных и функциональных интерьеров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white border-none">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-montserrat text-xl text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-renovation-gray mb-4">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-primary text-white">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-secondary mb-4">
              Наши работы
            </h2>
            <p className="text-renovation-gray text-lg max-w-2xl mx-auto">
              Примеры реализованных проектов, которые подтверждают наш профессионализм
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-montserrat text-secondary">{project.title}</CardTitle>
                      <CardDescription className="text-renovation-gray mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 bg-renovation-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-secondary mb-4">
              Этапы выполнения работ
            </h2>
            <p className="text-renovation-gray text-lg max-w-2xl mx-auto">
              Прозрачный процесс от консультации до сдачи готового объекта
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-montserrat font-bold text-xl mr-6">
                  {step.number}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-montserrat font-semibold text-xl text-secondary">
                      {step.title}
                    </h3>
                    <Badge variant="outline" className="ml-4">
                      {step.time}
                    </Badge>
                  </div>
                  <p className="text-renovation-gray">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-secondary mb-4">
              Связаться с нами
            </h2>
            <p className="text-renovation-gray text-lg max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="font-montserrat text-2xl text-secondary">
                  Оставить заявку
                </CardTitle>
                <CardDescription>
                  Мы перезвоним вам в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте" 
                      rows={4}
                    />
                  </div>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-secondary">Телефон</h3>
                    <p className="text-renovation-gray">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-secondary">Email</h3>
                    <p className="text-renovation-gray">info@remontpro.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-secondary">Адрес</h3>
                    <p className="text-renovation-gray">г. Москва, ул. Строителей, 15</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-secondary">Режим работы</h3>
                    <p className="text-renovation-gray">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-2xl mb-4">Маляр.PRO</h3>
              <p className="text-gray-300">
                Профессиональные отделочные работы под ключ с гарантией качества и соблюдением сроков.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Квартиры под ключ</li>
                <li>Офисные помещения</li>
                <li>Дизайн интерьера</li>
                <li>Капитальный ремонт</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@remontpro.ru</li>
                <li>г. Москва, ул. Строителей, 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-300">
            <p>&copy; 2024 Маляр.PRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;