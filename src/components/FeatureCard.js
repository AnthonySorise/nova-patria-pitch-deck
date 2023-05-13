import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FeatureCard({ title, image, description, devlogLinks }) {
    return (
        <Card
            sx={{
                backgroundColor: '#333',
                color: 'silver',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'fit-content', // Adjusts the height based on content
                flex: '1 1 calc(50% - 2em)'
            }}
        >
            {image &&
                <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={image}
                />
            }
            <CardContent sx={{ marginBottom: 'auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            {devlogLinks && (
                <CardActions>
                    {devlogLinks.map((link, index) => (
                        <Button key={index} size="small" href={link} target="_blank">Devlog Example</Button>
                    ))}
                </CardActions>
            )}
        </Card>
    );
}