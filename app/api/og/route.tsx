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
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Círculos decorativos de fondo */}
          <div style={{ 
            position: 'absolute', 
            top: '50px', 
            left: '50px', 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            background: 'rgba(255, 215, 0, 0.15)',
            filter: 'blur(40px)'
          }} />
          
          <div style={{ 
            position: 'absolute', 
            bottom: '80px', 
            right: '80px', 
            width: '250px', 
            height: '250px', 
            borderRadius: '50%', 
            background: 'rgba(255, 215, 0, 0.1)',
            filter: 'blur(50px)'
          }} />
          
          {/* Contenido principal */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px 40px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '80%',
            position: 'relative',
            zIndex: 5,
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
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
