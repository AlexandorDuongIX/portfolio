import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Về tôi',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      github: 'GitHub',
      education: 'Học vấn',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: 'Xin chào, tôi là',
      description:
        'Sinh viên ngành Kỹ thuật phần mềm tại FPT University. Đam mê lập trình và phát triển hệ thống, luôn cố gắng học hỏi để trở thành developer chuyên nghiệp.',
      contact: 'Liên hệ với tôi',
      viewProjects: 'Xem dự án',
      downloadCV: 'Tải CV',
      yearsExp: 'Năm kinh nghiệm',
      projectsDone: 'Dự án hoàn thành',
      passion: 'Đam mê học hỏi',
    },
    about: {
      label: 'Về tôi',
      title: 'Hành trình của tôi',
      subtitle: 'Từ những dòng code đầu tiên đến đam mê xây dựng sản phẩm thực tế',
      p1: 'Tôi bắt đầu quan tâm đến công nghệ từ khi còn học phổ thông, khi lần đầu tiếp xúc với lập trình và thấy được cách những dòng code có thể tạo ra sản phẩm thực tế.',
      p2: 'Hiện tại, tôi đang theo học ngành Kỹ thuật phần mềm tại FPT University, nơi tôi được đào tạo bài bản về lập trình, cơ sở dữ liệu và phát triển hệ thống. Trong quá trình học, tôi đã tham gia nhiều bài tập và project liên quan đến Java, SQL và xây dựng ứng dụng web.',
      p3: 'Tôi định hướng trở thành một software developer, đặc biệt quan tâm đến việc xây dựng các hệ thống thực tế có thể ứng dụng trong cuộc sống. Điểm mạnh của tôi là tinh thần ham học hỏi và chịu khó — hiện tại tôi đang làm về frontend nhưng cũng sẵn sàng học thêm và code backend nếu có yêu cầu.',
      h1: 'Sinh viên FPT', h1d: 'Kỹ thuật phần mềm',
      h2: '2+ Năm', h2d: 'Kinh nghiệm chuyên ngành',
      h3: 'Ham học hỏi', h3d: 'Luôn tìm tòi cái mới',
      h4: 'Linh hoạt', h4d: 'Frontend & Backend',
    },
    skills: {
      label: 'Kỹ năng',
      title: 'Tech Stack của tôi',
      subtitle: 'Những công nghệ và kỹ năng mà tôi đã và đang trau dồi',
      lang: 'Ngôn ngữ lập trình',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Platforms',
      soft: 'Soft Skills',
      learning: 'Khả năng học hỏi',
      teamwork: 'Làm việc nhóm',
      problemSolving: 'Giải quyết vấn đề',
    },
    projects: {
      label: 'Dự án',
      title: 'Dự án nổi bật',
      subtitle: 'Những dự án tôi đã tham gia xây dựng và phát triển',
      bikeTitle: 'Hệ thống bán xe đạp online',
      bikeDesc: 'Xây dựng nền tảng thương mại điện tử bán xe đạp trực tuyến với giao diện người dùng hiện đại, hệ thống quản lý sản phẩm, giỏ hàng và thanh toán.',
    },
    github: {
      label: 'GitHub',
      title: 'Hoạt động GitHub',
      subtitle: 'Thống kê contributions và hoạt động trên GitHub',
    },
    education: {
      label: 'Học vấn',
      title: 'Quá trình học tập',
      subtitle: 'Nền tảng kiến thức xây dựng sự nghiệp',
      major: 'Kỹ thuật phần mềm (Software Engineering)',
      studying: 'Đang theo học',
    },
    contact: {
      label: 'Liên hệ',
      title: 'Kết nối với tôi',
      subtitle: 'Sẵn sàng lắng nghe mọi cơ hội hợp tác và học hỏi',
      heading: 'Hãy liên hệ với tôi!',
      description: 'Nếu bạn có câu hỏi, cơ hội hợp tác hoặc chỉ muốn nói chuyện về công nghệ, đừng ngần ngại liên hệ với tôi qua các kênh bên dưới.',
      formTitle: 'Gửi tin nhắn',
      name: 'Họ tên',
      namePlaceholder: 'Nhập họ tên của bạn',
      email: 'Email',
      message: 'Tin nhắn',
      messagePlaceholder: 'Nội dung tin nhắn...',
      send: 'Gửi tin nhắn',
      phone: 'Điện thoại',
    },
    footer: {
      madeWith: 'Made with',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      github: 'GitHub',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      description:
        'Software Engineering student at FPT University. Passionate about programming and system development, always striving to become a professional developer.',
      contact: 'Contact Me',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      yearsExp: 'Years Experience',
      projectsDone: 'Projects Done',
      passion: 'Passion for Learning',
    },
    about: {
      label: 'About Me',
      title: 'My Journey',
      subtitle: 'From the first lines of code to a passion for building real products',
      p1: "I became interested in technology since high school, when I first encountered programming and saw how lines of code could create real products.",
      p2: "Currently, I'm studying Software Engineering at FPT University, where I receive professional training in programming, databases, and system development. During my studies, I have participated in many assignments and projects related to Java, SQL, and web application development.",
      p3: "I aspire to become a software developer, especially interested in building real-world systems. My strength is a spirit of eagerness to learn — I currently work on frontend but I'm also ready to learn and code backend when needed.",
      h1: 'FPT Student', h1d: 'Software Engineering',
      h2: '2+ Years', h2d: 'Professional Experience',
      h3: 'Eager Learner', h3d: 'Always exploring new things',
      h4: 'Flexible', h4d: 'Frontend & Backend',
    },
    skills: {
      label: 'Skills',
      title: 'My Tech Stack',
      subtitle: 'Technologies and skills I have been honing',
      lang: 'Programming Languages',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Platforms',
      soft: 'Soft Skills',
      learning: 'Learning Ability',
      teamwork: 'Teamwork',
      problemSolving: 'Problem Solving',
    },
    projects: {
      label: 'Projects',
      title: 'Featured Projects',
      subtitle: 'Projects I have participated in building and developing',
      bikeTitle: 'Online Bicycle Sales System',
      bikeDesc: 'Built an e-commerce platform for online bicycle sales with a modern user interface, product management system, shopping cart, and payment.',
    },
    github: {
      label: 'GitHub',
      title: 'GitHub Activity',
      subtitle: 'Contribution statistics and activity on GitHub',
    },
    education: {
      label: 'Education',
      title: 'Academic Background',
      subtitle: 'Knowledge foundation for building a career',
      major: 'Software Engineering',
      studying: 'Currently studying',
    },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle: 'Ready to hear all cooperation and learning opportunities',
      heading: 'Contact me!',
      description: "If you have questions, cooperation opportunities, or just want to talk about technology, don't hesitate to contact me through the channels below.",
      formTitle: 'Send a Message',
      name: 'Full Name',
      namePlaceholder: 'Enter your full name',
      email: 'Email',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      send: 'Send Message',
      phone: 'Phone',
    },
    footer: {
      madeWith: 'Made with',
    },
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'vi';
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'vi' ? 'en' : 'vi';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  };

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
