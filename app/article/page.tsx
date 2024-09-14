import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <RecentBlogs></RecentBlogs>
      <AllBlogs></AllBlogs>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between mt-20">
      <div className="ml-20">
        <div className="text-8xl font-bold">欢迎来到</div>
        <div className="text-5xl mt-9">我们的TEAM</div>
      </div>
      <img src="/welcome.png" alt="welcome" />
    </div>
  )
}

function RecentBlogs() {
  return (
    <div>
      <div className="text-4xl mb-16 mt-40 relative tracking-[5px] font-bold">
        最近的博客文章
        <img className="absolute top-[40%] left-[-40px] translate-y-[-50%] z-[-1]" src="/title-bg.png" alt=""/>
      </div>
      <div className="flex flex-wrap justify-between">
        {new Array(4).fill(1).map((i) => {
          return (
            <div key={i}>
              <BlogCard />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AllBlogs() {
  return (
    <div>
      <div className="text-4xl mb-16 mt-40 relative tracking-[5px] font-bold">
        所有的博客文章
        <img className="absolute top-[40%] left-[-40px] translate-y-[-50%] z-[-1]" src="/title-bg.png" alt=""/>
      </div>
      <div className="flex flex-wrap justify-between">
        {new Array(6).fill(1).map((i) => {
          return (
            <div key={i}>
              <BlogCardSmall/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function BlogCard() {
  const createTime = '秋刀鱼 2024年6月14日 09:43:59'
  const title = 'Web 前端开发技术'
  const intro = 'HTML(Hypertext Markup Language)，即超文本标记语言，是用于描述网页文档的一种标记语言。它通过在用户文档中加入特定的控制字符或命令，使文档能够按照用户期望的格式输出。HTML 语言主要用于客户端的页面设计。HTML 作为 Internet 上通行无阻的语言，简单易用且功能强大，支持不同数据格式的文件镶入，具有简易、可扩展、平台无关等特点。'

  return (
    <div className="max-w-[750px] mx-auto mb-14 p-10 bg-white red rounded-[32px]">
      <p className="text-lg text-card-purple font-semibold mb-4">{createTime}</p>
      <div className="w-full h-52 relative">
        <Image fill={true} src="/blog-image.png" alt="img"/>
      </div>
      <div className="mt-8">
        <h2 className="mt-3 text-2xl font-semibold flex justify-between items-center">
          {title}
          <img src="/arrow.png" alt=""/>
        </h2>
        <p className="mt-3 text-card-gray dark:text-card-gray-dark">{intro}</p>
      </div>
      <div className="mt-6">
        <div className="h-6 rounded-full inline-flex items-center font-medium mr-2 bg-white">
          <div className={` px-2.5 rounded-full bg-[#F9F5FF] text-[#9635FF]`}>好好</div>
        </div>
      </div>
    </div>
  )
}

function BlogCardSmall() {
  const createTime = '秋刀鱼 2024年6月14日 09:43:59'
  const title = 'Web 前端开发技术'
  const intro = 'HTML(Hypertext Markup Language)，即超文本标记语言，是用于描述网页文档的一种标记语言。它通过在用户文档中加入特定的控制字符或命令，使文档能够按照用户期望的格式输出。HTML 语言主要用于客户端的页面设计。HTML 作为 Internet 上通行无阻的语言，简单易用且功能强大，支持不同数据格式的文件镶入，具有简易、可扩展、平台无关等特点。'

  return (
    <div className="max-w-[750px] mx-auto mb-14 p-10 bg-[#F7F4FA] red rounded-[32px]">
      <p className="text-lg text-card-purple font-semibold mb-4">{createTime}</p>
      <div className="mt-8">
        <h2 className="mt-3 text-2xl font-semibold flex justify-between items-center">
          {title}
          <img src="/arrow.png" alt=""/>
        </h2>
        <p className="mt-3 text-card-gray dark:text-card-gray-dark">{intro}</p>
      </div>
      <div className="mt-6">
        <div className="h-6 rounded-full inline-flex items-center font-medium mr-2 bg-white">
          <div className={` px-2.5 rounded-full bg-[#F9F5FF] text-[#9635FF]`}>好好</div>
        </div>
      </div>
    </div>
  )
}
