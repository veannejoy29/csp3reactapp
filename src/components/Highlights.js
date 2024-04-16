import { Row, Col, Card } from 'react-bootstrap';

export default function Highlights() {

	return (
		 <Row className="mt-3 mb-3">
		    <Col xs={12} md={4}>
		        <Card className="cardHighlight p-3">
		            <Card.Body>
		                <Card.Title>
		                    <h2>Know It's Benefits</h2>
		                </Card.Title>
		                <Card.Text>Essential oils are prized for their diverse benefits, offering natural solutions for both the body and mind. These plant-derived extracts promote relaxation, reduce stress, improve skin health, and support respiratory wellness. Their aromatic qualities uplift moods, while their anti-inflammatory and antimicrobial properties make them a valuable addition to holistic well-being practices. Whether enhancing your environment or addressing health needs, essential oils provide a fragrant and natural path to overall wellness.
		                </Card.Text>
		            </Card.Body>
		        </Card>
		    </Col>
		    <Col xs={12} md={4}>
		        <Card className="cardHighlight p-3">
		            <Card.Body>
		                <Card.Title>
		                    <h2>Multi-Use Products</h2>
		                </Card.Title>
		                <Card.Text>Versatile essential oils are multipurpose wonders. They can be used for aromatherapy, skincare, hair care, and cleaning. For example, a bottle of lavender oil can relieve stress when diffused, offer skincare benefits when diluted, and add a pleasant scent to homemade cleaning solutions. These oils simplify wellness and daily routines by serving multiple functions.
		                </Card.Text>
		            </Card.Body>
		        </Card>
		    </Col>
		    <Col xs={12} md={4}>
		        <Card className="cardHighlight p-3">
		            <Card.Body>
		                <Card.Title>
		                    <h2>Safety Information</h2>
		                </Card.Title>
		                <Card.Text>Essential oil safety is paramount. Always dilute them with a carrier oil before applying to the skin, perform a patch test, and avoid contact with sensitive areas. Use caution during pregnancy and with children, and be aware of phototoxic oils' potential to cause skin sensitivity in sunlight. Only ingest oils labeled for consumption and consult professionals if taking medications. Store them properly and consider personal allergies. When in doubt, seek guidance from experts to ensure safe and effective use.
		                </Card.Text>
		            </Card.Body>
		        </Card>
		    </Col>
		</Row>
	)
}