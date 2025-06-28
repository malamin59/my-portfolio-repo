import myImage from "../../assets/unnamed.jpg";
const About = () => {
    return (
    <div>
         <section id="about" className="bg-[#1c2741] text-white py-16 px-6 md:px-20">
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto">
        {/* Image container */}
        <div className="relative">
          <div className="rounded-full bg-cyan-400 p-[3px] shadow-xl">
            <img
              src={myImage}
              alt="Al Amin"
              className="rounded-full w-44 h-44 md:w-72 md:h-72 object-cover border-2 border-white"
            />
          </div>
        </div>
        {/* Text content */}
        <div className="max-w-xl text-lg leading-relaxed">
          <h2 className="text-3xl font-bold mb-4  text-center md:text-left">About <small className='text-3xl  text-cyan-400 '> Me </small></h2>
          <span className="text-cyan-400">Frontend Developer</span>
          <p>
            Hi! I'm Alamin, a passionate React developer with experience building responsive and user-friendly web applications. 
            I enjoy turning ideas into reality using code, and I am always eager to learn new technologies and improve my skills.
          </p>
          <p className="mt-4">
            With over 6 months of programming experience, I have developed projects using React, Tailwind CSS, and Firebase, 
            and I'm excited to continue growing as a full-stack developer.
          </p>
        </div>
      </div>
    </section>
    </div>
    );
};

export default About;