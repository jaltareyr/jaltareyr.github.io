import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Mail, Check, Github } from 'lucide-react'
import { AnimatedText } from '../components/ui/AnimatedText'

export const metadata = {
  title: 'Portfolio - Yashodhan Jaltare',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-100 to-white" id="home">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="/clt_cover.jpg"
          alt="CLT View"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6">Yashodhan Jaltare</h1>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold">
            <AnimatedText 
              texts={[
                "MLOps Engineer",
                "Data Scientist"
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetweenTexts={100}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 sm:py-20" id="about">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* First column: Profile image and Skills */}
              <div className="lg:w-1/3 bg-gray-50 p-6 sm:p-8">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 mb-6 sm:mb-8 transition-transform duration-300 ease-in-out hover:scale-105">
                    <Image
                      src="/profile.jpg"
                      alt="Yashodhan Jaltare Profile Image"
                      width={400}
                      height={400}
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <div className="w-full">
                  <div className="space-y-4 sm:space-y-6">
                      <SkillCategory
                        title="Skills"
                        skills={[
                          <><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, C#, SQL, Go</>,
                          // <><strong>Frontend Tools:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Angular, Next.js, Webpack</>,
                          // <><strong>Backend Tools:</strong> Node.js, Express.js, Django, Flask, FastAPI, RESTful APIs, WebSocket, JSON, XML, Auth0</>,
                          <><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, SQLite, SQL Server, Cassandra</>,
                          <><strong>Cloud Tools:</strong> Microsoft Azure, Amazon Web Services, Databricks, Apache Spark, Apache Airflow, Pyspark, RESTful API, Docker, Azure Data Factory (ADF), SQL Server Integration Services (SSIS), Azure Data Lake Storage, Amazon S3, Azure Blob Storage</>,
                          <><strong>DevOps Tools:</strong> Git, GitHub, Azure DevOps, Docker Compose, Azure Pipelines</>
                        ]}
                      />
                    </div>
                </div>
                </div>
              </div>

              {/* Second column: About text */}
              <div className="lg:w-2/3 p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl text-gray-900 font-extrabold leading-loose mb-4 sm:mb-6">ABOUT ME</h1>
                <div className="space-y-4 sm:space-y-6">
                <div className="text-base sm:text-lg md:text-base text-gray-500 leading-relaxed space-y-4">
                  <p>
                    My name is <strong>Yashodhan Jaltare</strong>. I am a master’s student at the University of North Carolina at Charlotte,
                    majoring in Computer Science with a concentration in Data Science.
                  </p>
                  
                  <p>
                    I am a passionate data engineer and machine learning practitioner with a strong foundation in
                    building high-performance ETL pipelines, optimizing large-scale databases, and implementing ML
                    models for impactful real-world applications. I bring both academic expertise and
                    hands-on experience from roles in industry-leading companies and ambitious projects.
                  </p>
                  
                  <p>
                    <strong>Data Engineering:</strong> With extensive experience in designing and optimizing ETL pipelines
                    on platforms like Databricks, Azure Data Warehouse, and SQL Server, I’ve successfully managed and
                    processed databases of over 80 million records, reducing loan processing times and enhancing risk
                    management. My work with T-SQL, Hadoop, and other big data tools has allowed me to deliver robust
                    data solutions that drive business growth and efficiency.
                  </p>
                  
                  <p>
                    <strong>Machine Learning:</strong> My ML expertise spans from traditional algorithms to neural
                    networks and NLP, using frameworks like TensorFlow, PyTorch, and Scikit-Learn. Projects such as
                    building a question generation app using Qwen2.5 LLM and a movie recommender showcase my skill
                    in applying cutting-edge techniques for customized solutions. I focus on model optimization,
                    efficient data pipelines, and generating actionable insights that support decision-making.
                  </p>
                  
                  <p>
                    <strong>DevOps:</strong> Skilled in DevOps tools like Azure DevOps, Docker, and Kubernetes, I’ve
                    architected CI/CD pipelines that improve code management, security, and delivery timelines. By
                    integrating these practices into data engineering workflows, I aim to streamline deployments and
                    support dynamic, scalable infrastructure.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-12 sm:py-20" id="experience">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">EXPERIENCE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <ExperienceCard
              src="/uncc_logo.png?height=500&width=500"
              companyName="University of North Carolina at Charlotte"
              position="Graduate Assistant"
              duration="Aug 2024 - Present"
            />
            <ExperienceCard
              src="/bfl_logo.png?height=250&width=250"
              companyName="Software Engineer"
              position="Software Engineer,"
              duration="Jul 2022 - Jul 2024"
            />
            <ExperienceCard
              src="/tp_logo.png?height=250&width=250"
              companyName="Tetra Pak"
              position="Machine Learning Intern"
              duration="June 2021 - Jul 2022"
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-12 sm:py-20" id="education">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">EDUCATION</h2>
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 sm:gap-1">
            <EducationCard 
              src="/uncc_logo.png?height=250&width=250"
              universityName="University of North Carolina at Charlotte"
              degree="Master of Science in Computer Science"
              year="2024 - 2026"
            />
            <EducationCard 
              src="/coep_logo.jpeg?height=250&width=250"
              universityName="COEP Technological University"
              degree="Bachelor of Technology in Electrical Engineering"
              year="2018 - 2022"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <footer className="relative w-full py-16 sm:py-40" id="contact">
        <div className="w-full h-full bg-black"></div>
        <div className="absolute inset-0 bg-black bg-opacity-100 flex flex-col items-center justify-center text-white px-4">
          <a href="mailto:jaltareyr@gmail.com" className="text-xl sm:text-2xl mb-6 hover:text-gray-300 transition-colors">
            jaltareyr@gmail.com
          </a>
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="mailto:jaltareyr@gmail.com" aria-label="Email">
              <Mail className="text-white hover:text-gray-300 w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/yashodhan-jaltare-150a4b192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://github.com/jaltareyr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-300 transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: React.ReactNode[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="font-bold mb-2 text-gray-800">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600 font-medium">
            <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-1" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationCard({ src, universityName, degree, year }: { src: string, universityName: string, degree: string, year: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden w-full max-w-sm mx-4 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="p-4 flex flex-col h-full">
        <div className="mb-4 flex-shrink-0">
          <Image
            src={src}
            alt={`${universityName} logo`}
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center mb-2">{universityName}</h3>
          <div>
            <p className="text-sm text-gray-600 text-center mb-1">{degree}</p>
            <p className="text-sm text-gray-500 text-center">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ src, companyName, position, duration }: { src: string, companyName: string, position: string, duration: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden w-full max-w-sm mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="p-4 flex flex-col h-full">
        <div className="mb-4 flex-shrink-0">
          <Image
            src={src}
            alt={`${companyName} logo`}
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center mb-2">{companyName}</h3>
          <p className="text-sm text-gray-700 text-center mb-1">{position}</p>
          <p className="text-sm text-gray-500 text-center">{duration}</p>
        </div>
      </div>
    </div>
  );
}