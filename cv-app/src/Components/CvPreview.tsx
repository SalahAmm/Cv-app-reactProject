import {
  type educationInfoType,
  type personalInfoType,
  type workInfoType,
} from "../App";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef, useState } from "react";

type CvPreviewProps = {
  personalInfo: personalInfoType;
  educationInfo: educationInfoType[];
  workInfo: workInfoType[];
};

export default function CvPreview({
  personalInfo,
  educationInfo,
  workInfo,
}: CvPreviewProps) {

  const cvContentPdf = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadPdf = async () => {
    if (!cvContentPdf.current) {
      alert("Could not find CV content");
      return;
    }

    setIsGeneratingPdf(true);
    try {
      const content = cvContentPdf.current;
      const options = {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: '#FFFFFF',
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight
      };

      const canvas = await html2canvas(content, options);
      
      // A4 dimensions in mm
      const a4Width = 210;
      const a4Height = 297;

      const contentWidth = content.offsetWidth;
      const contentHeight = content.offsetHeight;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const ratio = Math.min(a4Width / contentWidth, a4Height / contentHeight);
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(
        imgData,
        'JPEG',
        0,
        0,
        contentWidth * ratio,
        contentHeight * ratio
      );

      pdf.save('my-cv.pdf');
    } catch (error) {
      console.error("Error generating PDF:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      alert("There was an error generating your PDF. Please try again. Error: " + errorMessage);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center p-4 rounded-lg">
        <div className="sticky top-4 z-10 w-full max-w-4xl bg-white p-4 rounded-lg shadow-md mb-4">
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className={`w-full ${
              isGeneratingPdf ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2`}
          >
            {isGeneratingPdf ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating PDF...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV as PDF
              </>
            )}
          </button>
        </div>

        <div
          id="cv-content"
          style={{
            width: '210mm',
            minHeight: '297mm',
            padding: '20mm',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            border: '2px solid #E5E7EB',
            borderRadius: '0.5rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          ref={cvContentPdf}
        >
          <div className="text-center mb-8">
            <h1 style={{ 
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '1rem'
              }}>
              {personalInfo.name}
            </h1>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              color: '#4B5563'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{
                  width: '1.25rem',
                  height: '1.25rem'
                }} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    color: '#4B5563',
                    textDecoration: 'none'
                  }}
                >
                  {personalInfo.email}
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{
                  width: '1.25rem',
                  height: '1.25rem'
                }} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  style={{
                    color: '#4B5563',
                    textDecoration: 'none'
                  }}
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: '1rem'
            }}>
              Education
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {educationInfo.map((item, index) => (
                <li key={index} style={{ 
                  marginBottom: index === educationInfo.length - 1 ? 0 : '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#1F2937'
                      }}>
                        {item.schoolName}
                      </h3>
                      <p style={{
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        color: '#2563EB',
                        marginBottom: '0.25rem'
                      }}>
                        {item.degree}
                      </p>
                    </div>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6B7280',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <hr style={{ 
            margin: '1.5rem 0',
            border: 'none',
            borderTop: '1px solid #E5E7EB'
          }} />
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: '1rem'
            }}>
              Work Experience
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {workInfo.map((item, index) => (
                <li key={index} style={{ 
                  marginBottom: index === workInfo.length - 1 ? 0 : '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#1F2937'
                      }}>
                        {item.company}
                      </h3>
                      <p style={{
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        color: '#2563EB',
                        marginBottom: '0.5rem'
                      }}>
                        {item.position}
                      </p>
                    </div>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6B7280',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                  <p style={{
                    color: '#4B5563',
                    marginTop: '0.5rem',
                    lineHeight: '1.625'
                  }}>
                    {item.responsibility}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}