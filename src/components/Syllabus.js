import React, { useState } from 'react';

const FileLink = ({ type, text, url = "#" }) => {
  const getIcon = () => {
    switch (type) {
      case 'pdf':
        return <span className="file-icon pdf-icon">📄</span>;
      case 'ppt':
        return <span className="file-icon ppt-icon">📊</span>;
      case 'video':
        return <span className="file-icon video-icon">🎬</span>;
      case 'link':
        return <span className="file-icon link-icon">🔗</span>;
      default:
        return <span className="file-icon">📄</span>;
    }
  };

  return (
    <a href={url} className="course-material-link">
      {getIcon()} {text}
    </a>
  );
};

const Syllabus = () => {
  // 状态管理：记录哪些行是展开的
  const [expandedRows, setExpandedRows] = useState({});
  const [expandAll, setExpandAll] = useState(false);
  
  // 切换行的展开/折叠状态
  const toggleRow = (index) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // 切换所有行的展开/折叠状态
  const toggleAllRows = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);
    
    // 根据当前展开全部的状态，设置所有行的展开状态
    const newExpandedRows = {};
    courseMaterials.forEach((_, index) => {
      newExpandedRows[index] = newExpandAll;
    });
    
    setExpandedRows(newExpandedRows);
  };
  
  // 课程材料数据
  const courseMaterials = [
    {
      date: "第1~2天",
      topic: "AI交互设计（Coze案例）",
      slidesPDF: [
        { text: "AI交互设计", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day1-2/doc_Optimized.pdf" }
      ],
      videos: [
        { text: "课程一：AI交互设计-从问题到创意", url: "https://www.bilibili.com/video/BV1rPMbzQE77" },
        { text: "课程二：AI交互设计-从创意到原型", url: "https://www.bilibili.com/video/BV1nPMbzQEz9" },
        { text: "课程二：AI交互设计-Coze前端设计", url: "https://www.bilibili.com/video/BV1nPMbzQEzo" }
      ],
      detailedContent: "设计思维全流程（共情→定义→构思→原型），AI特有设计考量（多智能体、对话流、控制权），Coze平台实操（Agent、Workflow、GUI）"
    },
    {
      date: "第3天",
      topic: "视觉设计基础 & AI绘图原理",
      slidesPDF: [
        { text: "视觉设计原理", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day3/aboutDesign-1_optimized.pdf" },
        { text: "AI绘画原理", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day3/aboutAI-1_optimized.pdf" }
      ],
      videos: [
        { text: "课程三：视觉设计原理", url: "https://www.bilibili.com/video/BV1nPMbzQEZU" },
        { text: "课程三：人工智能与 AI 绘画原理", url: "https://www.bilibili.com/video/BV1HPMbzQE3J" }
      ],
      detailedContent: "视觉设计原理（色彩/形状/字体/版式），AI原理（Embedding、学习过程、Diffusion），Stable Diffusion与Prompt基础"
    },
    {
      date: "第4天",
      topic: "AI可控图像生成 & 海报设计",
      slidesPDF: [
        { text: "海报设计与视觉传达原理", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day4/aboutDesign-2_optimized.pdf" },
        { text: "有个性的图像生成", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day4/aboutAI-2_optimized.pdf" }
      ],
      videos: [
        { text: "课程四：有个性的图像生成", url: "https://www.bilibili.com/video/BV1nPMbzQEU7" },
        { text: "课程四：海报设计与视觉传达原理", url: "https://www.bilibili.com/video/BV1nPMbzQEzH" }
      ],
      detailedContent: "AI图像可控技术（ControlNet、LoRA、IPAdapter等），AI辅助创意，海报设计原理（修辞、叙事、对比、简洁），视觉传达策略"
    },
    {
      date: "第5天",
      topic: "AI艺术思维 & 绘图新范式/未来",
      slidesPDF: [
        { text: "设计、艺术思维与美", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day5/aboutDesign-3_optimized.pdf" },
        { text: "让 AI 像人类一样作画", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day5/lecture_optimized.pdf" },
        { text: "图像生成前沿", url: "https://github.com/datawhalechina/design-with-ai/blob/main/docs/2D%20-%20March%202025/day5/aboutAI-3_optimized.pdf" }
      ],
      videos: [
        { text: "课程五：设计、艺术思维与美", url: "https://www.bilibili.com/video/BV1nPMbzQE1W" },
        { text: "课程五：图像生成前沿，让 AI 像人一样绘画", url: "https://www.bilibili.com/video/BV1rPMbzQE7J" }
      ],
      detailedContent: "艺术思维与创新（历史/蓝海/颠覆式），AI绘画新范式（迭代优化），前沿进展（GPT-4o）、未来趋势（Agent/视频）、人类价值（共情）"
    }
  ];

  return (
    <section id="syllabus" className="section course-materials-section">
      <div className="section-header">
        <h2 className="section-title">Course Materials</h2>
        <button 
          className="expand-all-button" 
          onClick={toggleAllRows}
          title={expandAll ? "折叠全部" : "展开全部"}
        >
          {expandAll ? "▲" : "▼"}
        </button>
      </div>
      
      <div className="course-materials-container">
        <table className="course-materials-table">
          <thead>
            <tr>
              <th className="date-col">日期</th>
              <th className="topic-col">主题</th>
              <th className="slides-col">幻灯片 (PDF)</th>
              <th className="videos-col">视频</th>
            </tr>
          </thead>
          <tbody>
            {courseMaterials.map((material, index) => (
              <React.Fragment key={index}>
                <tr className="material-row">
                  <td className="date-cell">{material.date}</td>
                  <td className="topic-cell">
                    <button 
                      className={`topic-button ${expandedRows[index] ? 'expanded' : ''}`}
                      onClick={() => toggleRow(index)}
                    >
                      {material.topic}
                      <span className="dropdown-icon">{expandedRows[index] ? '▲' : '▼'}</span>
                    </button>
                  </td>
                  <td className="slides-cell">
                    {material.slidesPDF.map((slide, i) => (
                      <div key={i} className="material-link-wrapper">
                        <FileLink type="pdf" text={slide.text} url={slide.url} />
                      </div>
                    ))}
                  </td>
                  <td className="videos-cell">
                    {material.videos.map((video, i) => (
                      <div key={i} className="material-link-wrapper">
                        <FileLink type="video" text={video.text} url={video.url} />
                      </div>
                    ))}
                  </td>
                </tr>
                {expandedRows[index] && (
                  <tr className="detailed-content-row">
                    <td colSpan="4" className="detailed-content-cell">
                      <div className="detailed-content">
                        <h4>课程详情：</h4>
                        <p>{material.detailedContent}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Syllabus; 