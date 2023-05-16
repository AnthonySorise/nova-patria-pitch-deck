import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FeatureCard({ title, image, sideImage, description, html, buttonNames, buttonLinks, isFullWidth, isBold }) {
    // Check if description is an array, if not make it into a single-item array
    const descriptionArray = Array.isArray(description) ? description : [description];

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
                minHeight: 'fit-content',
                flex: isFullWidth ? '1 1 100%' : {
                    xs: '1 1 100%',
                    md: '1 1 calc(50% - 2em)'
                },
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
                {title &&
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                }
                <div style={{ display: 'flex' }}>
                    {sideImage &&
                        <div style={{ width: 'fit-content', minWidth: "Min(25vw, fit-content)", marginRight: '15px' }}>
                            <img src={sideImage} alt={title} style={{ width: '100%' }} />
                        </div>
                    }
                    <Typography variant="body2" paragraph sx={{ marginBottom: 0 }}>
                        {descriptionArray.map((paragraph, index) => (
                            <React.Fragment key={index}>
                                <span style={{ fontWeight: isBold ? "bold" : "" }}>{paragraph}</span>
                                {index < descriptionArray.length - 1 && <><br /><br /></>}
                            </React.Fragment>
                        ))}
                        {html && (
                            <div dangerouslySetInnerHTML={{ __html: html }}></div>
                        )}
                    </Typography>
                </div>
            </CardContent>
            {buttonLinks && buttonNames && (
                <CardActions>
                    {buttonLinks.map((link, index) => (
                        <Button
                            sx={{
                                border: "1px solid silver",
                                '&:hover': {
                                    backgroundColor: 'silver',
                                    color: 'black'
                                }
                            }}
                            key={index} size="small" href={link} target="_blank">{buttonNames[index]}</Button>
                    ))}
                </CardActions>
            )}
        </Card>
    );
}