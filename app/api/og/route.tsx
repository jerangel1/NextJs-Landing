import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Parámetros dinámicos (opcionales)
    const title = searchParams.get('title') || 'Pronosticon';
    const subtitle = searchParams.get('subtitle') || 'Resultados de Lotería en Tiempo Real';
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom right, #6a4c6d, #9B4DCA)',
            padding: '40px',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Círculos decorativos */}
          <div style={{ 
            position: 'absolute', 
            top: '50px', 
            left: '50px', 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            background: 'rgba(255, 215, 0, 0.2)',
            filter: 'blur(20px)'
          }} />
          
          <div style={{ 
            position: 'absolute', 
            bottom: '80px', 
            right: '80px', 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            background: 'rgba(255, 215, 0, 0.15)',
            filter: 'blur(25px)'
          }} />
          
          {/* Contenido principal */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '80%'
          }}>
            <h1 style={{ 
              fontSize: 80, 
              fontWeight: 'bold', 
              color: 'white',
              margin: '0 0 20px 0',
              textAlign: 'center',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}>
              {title}
            </h1>
            
            <h2 style={{ 
              fontSize: 40, 
              color: 'rgba(255, 215, 0, 0.9)', 
              margin: '0',
              textAlign: 'center',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              {subtitle}
            </h2>
          </div>
          
          {/* Bolas de lotería decorativas */}
          <div style={{ 
            position: 'absolute', 
            bottom: '40px', 
            left: '100px', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            fontWeight: 'bold',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}>
            13
          </div>
          
          <div style={{ 
            position: 'absolute', 
            top: '120px', 
            right: '120px', 
            width: '70px', 
            height: '70px', 
            borderRadius: '50%', 
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '35px',
            fontWeight: 'bold',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}>
            7
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
