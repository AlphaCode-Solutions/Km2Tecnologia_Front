'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  Container,
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  Avatar,
  Stack
} from '@mui/material';
import {
  CheckCircle,
  Analytics,
  AutoAwesome,
  Support,
  ArrowForward
} from '@mui/icons-material';

export default function Page() {
  return (
    <main style={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #1e293b 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 4,
          position: 'relative'
        }}
      >
        {/* Header */}
        <Box>
          <Image
            src="/logo.png"
            alt="KM2 Tecnología"
            width={300}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg">
          <Box sx={{ mt: 10 }}>
            <h1>
              LA MEJOR{' '}
              <span style={{ color: '#E8681F' }}>SOLUCIÓN TECNOLÓGICA</span>{' '}
              PARA TU EMPRESA
            </h1>

            <h5 style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '3rem',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
              lineHeight: 1.6
            }}>
              Potencia tu negocio con nuestra plataforma integral. Gestión financiera,
              analíticas avanzadas y automatización en una sola solución.
            </h5>

            {/* Features Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 6, maxWidth: '800px', mx: 'auto' }}>
              {[
                { icon: <CheckCircle />, text: 'Gestión Financiera' },
                { icon: <Analytics />, text: 'Dashboards en Tiempo Real' },
                { icon: <AutoAwesome />, text: 'Automatización' },
                { icon: <Support />, text: 'Soporte 24/7' }
              ].map((feature, index) => (
                <Box key={index} sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      bgcolor: '#4AA837',
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
                    {feature.text}
                  </p>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Products Section */}
      <Box sx={{ py: 10, bgcolor: 'grey.50', minWidth: '100%', margin: '0' }}>
        <Container className='min-w-screen'>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <h2 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>
              Nuestros Productos
            </h2>
            <h5 style={{
              color: '#666666',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: 'normal'
            }}>
              Elige la solución que mejor se adapte a las necesidades de tu empresa
            </h5>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
            gap: 10, 
            width: '100%',
            maxWidth: '100%', 
          }}>
            {/* KM2Tecnología */}
            <Box>
              <Card sx={{ 
                height: '700px', // Altura fija
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 64,
                        height: 64
                      }}
                    >
                      <CheckCircle />
                    </Avatar>
                    <Chip
                      label="MÁS POPULAR"
                      color="primary"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>

                  <h3 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>
                    KM2Tecnología
                  </h3>
                  <h4 style={{ color: '#E8681F', marginBottom: '1.5rem', fontWeight: 600 }}>
                    Plataforma Completa
                  </h4>

                  <p style={{ marginBottom: '2rem', color: '#666666', flex: 1 }}>
                    Gestión integral de ingresos, costos, gastos y dashboards con análisis
                    comparativo y sugerencias automatizadas.
                  </p>

                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {[
                      'Gestión financiera completa',
                      'Dashboards en tiempo real',
                      'Soporte 24/7 incluido'
                    ].map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: 'secondary.main', mr: 2, fontSize: 20 }} />
                        <p style={{ margin: 0 }}>{feature}</p>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: 4, pt: 0, mt: 'auto' }}>
                  <Link href="/auth/login" style={{ textDecoration: 'none', width: '100%' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{ py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
                    >
                      Aplicar Ahora
                    </Button>
                  </Link>
                </CardActions>

                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <small style={{ color: '#999999' }}>
                    Detalles de la oferta | Términos y condiciones
                  </small>
                </Box>
              </Card>
            </Box>

            {/* KM2Microservicio */}
            <Box>
              <Card sx={{ 
                height: '700px', // Altura fija
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 64,
                        height: 64
                      }}
                    >
                      <CheckCircle />
                    </Avatar>
                    <Chip
                      label="MÁS CONSULTADA"
                      color="primary"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>

                  <h3 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>
                    KM2Microservicio
                  </h3>
                  <h4 style={{ color: '#E8681F', marginBottom: '1.5rem', fontWeight: 600 }}>
                    Plataforma Completa
                  </h4>

                  <p style={{ marginBottom: '2rem', color: '#666666', flex: 1 }}>
                    Integración entre CRMs entre ADMCloud y GeoVictoria para eficientizar la gestion de horas de los empleados.
                  </p>

                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {[
                      'Integración entre CRMs',
                      'Eficiencia en la transferencia de horas registradas',
                      'Soporte incluido'
                    ].map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: 'secondary.main', mr: 2, fontSize: 20 }} />
                        <p style={{ margin: 0 }}>{feature}</p>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: 4, pt: 0, mt: 'auto' }}>
                  <Link href="https://geoadmcloud.com/" style={{ textDecoration: 'none', width: '100%' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{ py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
                    >
                      Aplicar Ahora
                    </Button>
                  </Link>
                </CardActions>
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <small style={{ color: '#999999' }}>
                    Detalles de la oferta | Términos y condiciones
                  </small>
                </Box>
              </Card>
            </Box>

            {/* Analytics */}
            <Box>
              <Card sx={{ 
                height: '700px', // Altura fija
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'secondary.main',
                        width: 64,
                        height: 64
                      }}
                    >
                      <Analytics />
                    </Avatar>
                    <Chip
                      label="PRÓXIMAMENTE"
                      color="secondary"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>

                  <h3 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>
                    Analíticas Avanzadas
                  </h3>
                  <h4 style={{ color: '#4AA837', marginBottom: '1.5rem', fontWeight: 600 }}>
                    Premium
                  </h4>

                  <p style={{ marginBottom: '2rem', color: '#666666', flex: 1 }}>
                    Dashboards interactivos con métricas clave y reportes personalizados para
                    tomar decisiones basadas en datos.
                  </p>

                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {[
                      'Reportes personalizados',
                      'Métricas avanzadas',
                      'Predicciones inteligentes'
                    ].map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ color: 'secondary.main', mr: 2, fontSize: 20 }} />
                        <p style={{ margin: 0 }}>{feature}</p>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: 4, pt: 0, mt: 'auto' }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      bgcolor: 'secondary.main',
                      '&:hover': {
                        bgcolor: 'secondary.dark'
                      }
                    }}
                  >
                    Próximamente
                  </Button>
                </CardActions>

                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <small style={{ color: '#999999' }}>
                    Detalles de la oferta | Términos y condiciones
                  </small>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
