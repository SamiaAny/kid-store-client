import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqimg from '../../images/undraw_Questions_re_1fy7.png';
import { Container, Grid } from '@mui/material';

const Faq = () => {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
        <div style={{marginTop: '100px'}}>
            <Container>
                <Typography variant="h4" sx={{ fontWeight: {sm:200,md:500},my:3, mx : {sm:2} }}>Frequently Asked Question</Typography> 
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={12} md={6}>
                        <img style={{ width: '100%' }} src={faqimg} alt=""></img>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{mt:10}}>
                        <div>  
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Can I use my Coupon Online?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Yes, But there are limited time will be given for using coupon online.It's just kind of offer type.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Is there available any Shipping process?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Kid store online base website where you can order and there are different kind of shipping process avaiable.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>How often your item availability update?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        It would not be able to say exact time but once you register in our website.yo will be notified abot our new product.
                        </Typography>
                        </AccordionDetails>
                        </Accordion>
                        <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>I placed an order but did not response timely</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Kindly wait for the response.A mail will be automatic send to your email address.Then check your spam also because some times the message will be checked as spam.
                        </Typography>
                        </AccordionDetails>
                        </Accordion>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Faq;