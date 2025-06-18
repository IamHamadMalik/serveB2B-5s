import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"

type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  featured: boolean
  published: boolean
  category: string
  tags: string[]
  author_name: string
  author_email: string
  read_time: number
  meta_title: string
  meta_description: string
  created_at: string
  updated_at: string
}

// Enhanced fallback article data with more comprehensive content
const fallbackArticles: Record<string, BlogPost> = {
  "complete-guide-salesforce-b2b-commerce-cloud-implementation": {
    id: 1,
    title: "Complete Guide to Salesforce B2B Commerce Cloud Implementation",
    slug: "complete-guide-salesforce-b2b-commerce-cloud-implementation",
    excerpt:
      "Learn step-by-step how to implement Salesforce B2B Commerce Cloud for your business, including best practices, common pitfalls, and optimization strategies.",
    content: `# Complete Guide to Salesforce B2B Commerce Cloud Implementation

Implementing Salesforce B2B Commerce Cloud is a transformative journey that can revolutionize your business operations and customer experience. This comprehensive guide will walk you through every step of the process, from initial planning to go-live and beyond.

## Understanding B2B Commerce Cloud

Salesforce B2B Commerce Cloud is designed specifically for business-to-business transactions, offering features that cater to complex B2B requirements such as:

- **Account-based pricing and catalogs** - Different pricing for different customer tiers
- **Approval workflows for purchases** - Multi-level approval processes for large orders
- **Complex product configurations** - Handle products with multiple variants and options
- **Integration with ERP systems** - Seamless data flow between systems
- **Multi-level account hierarchies** - Support for complex organizational structures

## Pre-Implementation Planning

### 1. Business Requirements Analysis

Before diving into implementation, conduct a thorough analysis of your business requirements:

**Current State Assessment:**
- Map out your existing sales processes
- Document current pain points and inefficiencies
- Identify key stakeholders and their specific needs
- Analyze your current technology stack

**Future State Vision:**
- Define clear business objectives
- Set measurable success criteria
- Establish timeline and milestones
- Determine budget and resource allocation

### 2. Technical Architecture Planning

Design your technical architecture considering:

**Data Architecture:**
- Data migration strategies from legacy systems
- Data governance and quality standards
- Master data management approach
- Backup and disaster recovery plans

**Integration Architecture:**
- Integration points with existing systems (ERP, CRM, etc.)
- API strategy and management
- Real-time vs. batch processing requirements
- Security and compliance considerations

## Implementation Phases

### Phase 1: Foundation Setup (Weeks 1-4)

**Org Configuration:**
- Set up Salesforce org structure
- Configure security settings and user access
- Establish development, testing, and production environments
- Set up version control and deployment processes

**Account Structure Configuration:**
- Design account hierarchy models
- Set up account types and classifications
- Configure territory management
- Establish account assignment rules

**User Management:**
- Define user roles and permission sets
- Set up user provisioning processes
- Configure single sign-on (SSO)
- Establish user training programs

### Phase 2: Product Catalog and Pricing (Weeks 5-8)

**Product Data Management:**
- Import and cleanse product data
- Set up product categories and hierarchies
- Configure product attributes and specifications
- Implement product search and filtering

**Pricing Configuration:**
- Set up price books and pricing tiers
- Configure volume discounts and promotions
- Implement contract-based pricing
- Set up currency and tax management

### Phase 3: Storefront and User Experience (Weeks 9-12)

**Storefront Design:**
- Design responsive, mobile-first interfaces
- Implement brand guidelines and styling
- Create intuitive navigation and search
- Optimize for performance and accessibility

**Shopping Experience:**
- Configure product detail pages
- Implement shopping cart functionality
- Set up wishlist and comparison features
- Create personalized recommendations

### Phase 4: Order Management and Workflows (Weeks 13-16)

**Order Processing:**
- Configure order capture and validation
- Set up approval workflows
- Implement order tracking and notifications
- Configure return and refund processes

**Inventory Management:**
- Set up inventory tracking and allocation
- Configure stock level notifications
- Implement backorder management
- Set up inventory forecasting

### Phase 5: Integration and Data Synchronization (Weeks 17-20)

**ERP Integration:**
- Connect with existing ERP systems
- Set up real-time data synchronization
- Configure order and invoice processing
- Implement customer and product data sync

**Payment Integration:**
- Configure payment gateways
- Set up payment methods and terms
- Implement fraud detection and prevention
- Configure payment reporting and reconciliation

## Best Practices for Success

### 1. User Experience Focus

**Mobile-First Design:**
- Ensure responsive design across all devices
- Optimize touch interactions for mobile users
- Implement progressive web app (PWA) features
- Test extensively on various screen sizes

**Performance Optimization:**
- Minimize page load times
- Optimize images and media files
- Implement caching strategies
- Monitor and optimize database queries

### 2. Data Quality Management

**Data Governance:**
- Establish data quality standards
- Implement data validation rules
- Set up regular data audits
- Create data stewardship roles

**Migration Best Practices:**
- Clean and validate data before migration
- Perform test migrations in staging environments
- Plan for data mapping and transformation
- Establish rollback procedures

### 3. Change Management

**User Adoption:**
- Develop comprehensive training programs
- Create user guides and documentation
- Establish super-user networks
- Provide ongoing support and feedback channels

**Communication Strategy:**
- Regular stakeholder updates
- Clear communication of benefits and changes
- Address concerns and resistance proactively
- Celebrate milestones and successes

## Common Pitfalls and How to Avoid Them

### 1. Insufficient Planning
**Problem:** Rushing into implementation without proper planning
**Solution:** Invest adequate time in requirements gathering and planning phases

### 2. Data Migration Issues
**Problem:** Poor data quality leading to system issues
**Solution:** Implement thorough data cleansing and validation processes

### 3. User Adoption Challenges
**Problem:** Users resistant to change or inadequately trained
**Solution:** Comprehensive change management and training programs

### 4. Integration Complexity
**Problem:** Underestimating integration challenges and timelines
**Solution:** Detailed integration planning and testing strategies

### 5. Scope Creep
**Problem:** Continuously adding features without considering impact
**Solution:** Strict change control processes and stakeholder alignment

## Post-Implementation Optimization

### Performance Monitoring

**Key Metrics to Track:**
- Page load times and system performance
- User adoption and engagement rates
- Order conversion rates
- Customer satisfaction scores
- System uptime and reliability

**Analytics and Reporting:**
- Set up comprehensive dashboards
- Implement real-time monitoring
- Create automated alerts for issues
- Regular performance reviews

### Continuous Improvement

**Feedback Collection:**
- Regular user surveys and feedback sessions
- Monitor support tickets and common issues
- Analyze user behavior and usage patterns
- Conduct periodic system audits

**Feature Enhancement:**
- Regular platform updates and patches
- New feature rollouts based on user needs
- Performance optimizations
- Security updates and compliance maintenance

## Advanced Features and Considerations

### AI and Machine Learning

**Einstein Features:**
- Product recommendations
- Predictive analytics
- Automated customer service
- Dynamic pricing optimization

### Headless Commerce

**Benefits:**
- Flexibility in frontend development
- Omnichannel consistency
- Faster time-to-market for new features
- Better performance and scalability

### Sustainability and ESG

**Implementation:**
- Carbon footprint tracking
- Sustainable product highlighting
- Supply chain transparency
- ESG reporting capabilities

## Conclusion

Successful Salesforce B2B Commerce Cloud implementation requires careful planning, proper execution, and ongoing optimization. By following this comprehensive guide and working with experienced implementation partners, you can ensure a successful deployment that drives business growth and enhances customer experience.

The key to success lies in understanding your unique business requirements, planning thoroughly, and maintaining focus on user experience throughout the implementation process. Remember that implementation is just the beginning – continuous optimization and enhancement will ensure long-term success.

## Ready to Get Started?

If you're ready to begin your B2B Commerce Cloud journey, our expert team at ServeB2B is here to help. We provide end-to-end implementation services, from initial planning to post-go-live support.

**Contact us today to discuss your specific requirements and learn how we can help you achieve your B2B e-commerce goals.**`,
    featured: true,
    published: true,
    category: "Implementation",
    tags: ["Commerce Cloud", "B2B", "Implementation", "Guide"],
    author_name: "Sarah Johnson",
    author_email: "sarah@serveb2b.com",
    read_time: 12,
    meta_title: "Complete Guide to Salesforce B2B Commerce Cloud Implementation | ServeB2B",
    meta_description:
      "Step-by-step guide to implementing Salesforce B2B Commerce Cloud with best practices, common pitfalls, and optimization strategies for successful deployment.",
    created_at: "2024-12-18T00:00:00Z",
    updated_at: "2024-12-18T00:00:00Z",
  },
  "b2b-ecommerce-trends-2025": {
    id: 2,
    title: "B2B E-commerce Trends That Will Shape 2025",
    slug: "b2b-ecommerce-trends-2025",
    excerpt:
      "Discover the emerging trends in B2B e-commerce and how Salesforce Commerce Cloud is adapting to meet these new demands.",
    content: `# B2B E-commerce Trends That Will Shape 2025

The B2B e-commerce landscape is evolving at an unprecedented pace, driven by changing buyer expectations, technological advancements, and market dynamics. As we look ahead to 2025, several transformative trends are emerging that will fundamentally reshape how businesses engage with their customers and conduct commerce.

## 1. AI-Powered Personalization Revolution

Artificial Intelligence is no longer a futuristic concept—it's becoming the backbone of modern B2B e-commerce experiences.

### Dynamic Content Personalization
AI algorithms now adapt content in real-time based on user behavior, purchase history, and contextual data. This means:
- **Personalized product catalogs** that show relevant items based on past purchases
- **Dynamic pricing** that adjusts based on customer tier and purchase volume
- **Customized content** that speaks to specific industry needs and pain points
- **Intelligent product recommendations** that increase average order value by 15-30%

### Predictive Analytics for Business Intelligence
Advanced forecasting capabilities are transforming how B2B companies manage their operations:
- **Demand forecasting** that helps optimize inventory levels
- **Customer lifetime value prediction** for better resource allocation
- **Churn prediction** to proactively retain valuable customers
- **Market trend analysis** for strategic planning

### Implementation in Salesforce
Salesforce Einstein AI provides powerful tools for B2B personalization:
- Einstein Product Recommendations
- Einstein Search for intelligent product discovery
- Einstein Analytics for predictive insights
- Einstein Bots for automated customer service

## 2. Mobile-First B2B Experiences

The shift to mobile-first B2B commerce is accelerating, with mobile transactions expected to account for over 60% of B2B purchases by 2025.

### Progressive Web Apps (PWAs)
PWAs are bridging the gap between web and mobile app experiences:
- **App-like performance** without requiring downloads
- **Offline capabilities** for field sales teams
- **Push notifications** for order updates and promotions
- **Fast loading times** even on slower networks

### Mobile-Optimized Features
B2B platforms are implementing mobile-specific features:
- **Voice search** for hands-free product discovery
- **Barcode scanning** for quick reordering
- **Location-based services** for inventory and delivery information
- **Touch-optimized interfaces** for complex product configurations

### Mobile Payment Integration
Streamlined payment processes optimized for mobile devices:
- **Digital wallets** integration (Apple Pay, Google Pay)
- **One-click purchasing** for repeat orders
- **Biometric authentication** for secure transactions
- **Mobile invoicing** and payment tracking

## 3. Self-Service Customer Portal Evolution

Modern B2B buyers prefer self-service options, with 83% preferring to research and purchase independently.

### Advanced Account Management
Comprehensive self-service portals now include:
- **Real-time account dashboards** with spending analytics
- **Custom approval workflows** for different purchase types
- **Budget tracking and alerts** to prevent overspending
- **Multi-location management** for enterprise accounts

### Intelligent Support Systems
AI-powered support is reducing the need for human intervention:
- **Chatbots** that can handle complex product inquiries
- **Knowledge bases** with intelligent search capabilities
- **Video tutorials** and interactive guides
- **Community forums** for peer-to-peer support

### Order Management Excellence
Enhanced order management capabilities:
- **Order tracking** with real-time updates
- **Delivery scheduling** and modification options
- **Return and exchange** self-service processes
- **Invoice management** and payment history

## 4. Integration-First Architecture

Seamless integration is becoming critical for B2B success, with companies requiring average of 12+ system integrations.

### API-First Approach
Modern B2B platforms are built with integration in mind:
- **RESTful APIs** for easy third-party connections
- **Webhook support** for real-time data synchronization
- **GraphQL** for efficient data querying
- **SDK availability** for custom integrations

### Microservices Architecture
Breaking down monolithic systems into manageable components:
- **Scalable services** that can grow independently
- **Fault isolation** to prevent system-wide failures
- **Technology flexibility** for different service requirements
- **Faster deployment** of new features and updates

### Cloud-Native Solutions
Leveraging cloud infrastructure for better performance:
- **Auto-scaling** to handle traffic spikes
- **Global content delivery** for faster load times
- **Disaster recovery** and backup capabilities
- **Cost optimization** through usage-based pricing

## 5. Sustainability and ESG Focus

Environmental, Social, and Governance (ESG) factors are increasingly driving B2B purchasing decisions.

### Carbon Footprint Tracking
Companies are implementing tools to monitor environmental impact:
- **Product carbon footprints** displayed on product pages
- **Shipping emissions** calculations and offset options
- **Sustainable packaging** choices and information
- **Supply chain transparency** for environmental impact

### Sustainable Product Options
Highlighting and promoting environmentally friendly products:
- **Green product badges** and certifications
- **Sustainability scores** for easy comparison
- **Alternative product suggestions** with lower environmental impact
- **Bulk purchasing incentives** to reduce packaging waste

### ESG Reporting Capabilities
Integrated reporting tools for compliance and transparency:
- **Automated ESG data collection** from transactions
- **Compliance reporting** for regulatory requirements
- **Sustainability dashboards** for stakeholder communication
- **Third-party verification** integration

## 6. Advanced Analytics and Business Intelligence

Data-driven decision making is becoming more sophisticated with real-time insights and predictive capabilities.

### Real-Time Dashboards
Instant visibility into key performance metrics:
- **Sales performance** tracking across channels
- **Customer behavior** analysis and insights
- **Inventory levels** and turnover rates
- **Market trends** and competitive analysis

### Predictive Insights
Forecasting capabilities for strategic planning:
- **Sales forecasting** with seasonal adjustments
- **Customer behavior prediction** for targeted marketing
- **Inventory optimization** to reduce carrying costs
- **Market opportunity identification** for growth

### Customer Journey Analytics
Understanding the complete buyer journey:
- **Touchpoint analysis** across all channels
- **Conversion funnel** optimization opportunities
- **Customer satisfaction** tracking and improvement
- **Retention strategy** development and execution

## How Salesforce Commerce Cloud is Adapting

Salesforce is continuously evolving its platform to support these emerging trends:

### Einstein AI Integration
- Built-in AI capabilities for personalization and analytics
- Machine learning models for product recommendations
- Predictive analytics for business intelligence
- Natural language processing for customer service

### Headless Commerce Support
- Flexible architecture options for custom frontends
- API-first approach for omnichannel experiences
- Microservices architecture for scalability
- Integration capabilities with modern development frameworks

### Mobile-Optimized Experiences
- Responsive design templates and components
- Mobile-first development tools
- Progressive Web App capabilities
- Mobile payment integration options

### Sustainability Cloud Integration
- ESG tracking and reporting capabilities
- Carbon footprint calculation tools
- Sustainable supply chain management
- Compliance and certification tracking

## Preparing Your Business for 2025

To stay competitive in the evolving B2B landscape, organizations should:

### 1. Invest in AI and Automation
- **Start with pilot projects** to test AI capabilities
- **Build data infrastructure** to support AI initiatives
- **Train teams** on AI tools and technologies
- **Measure ROI** and scale successful implementations

### 2. Prioritize Mobile Experience
- **Audit current mobile performance** and identify gaps
- **Implement responsive design** across all touchpoints
- **Optimize for mobile-specific use cases** and workflows
- **Test extensively** on various devices and networks

### 3. Enhance Self-Service Capabilities
- **Analyze customer support tickets** to identify self-service opportunities
- **Implement comprehensive knowledge bases** and FAQs
- **Create interactive tutorials** and guides
- **Gather feedback** and continuously improve self-service options

### 4. Strengthen Integration Strategies
- **Audit current integrations** and identify improvement opportunities
- **Implement API management** strategies and governance
- **Plan for future integrations** and scalability requirements
- **Invest in integration platforms** and tools

### 5. Incorporate Sustainability Metrics
- **Assess current environmental impact** of operations
- **Set sustainability goals** and targets
- **Implement tracking and reporting** systems
- **Communicate progress** to stakeholders and customers

## The Future is Now

The B2B e-commerce landscape of 2025 will be characterized by intelligent, mobile-first, and sustainable commerce experiences. Companies that start preparing now—by investing in AI, prioritizing mobile experiences, enhancing self-service capabilities, strengthening integrations, and incorporating sustainability metrics—will be best positioned to capitalize on these emerging trends.

The transformation is already underway, and the businesses that embrace these changes will not only survive but thrive in the new B2B commerce ecosystem. The question isn't whether these trends will reshape B2B commerce, but how quickly your organization can adapt to leverage them for competitive advantage.

**Ready to future-proof your B2B commerce strategy? Contact ServeB2B today to learn how we can help you implement these cutting-edge trends and technologies.**`,
    featured: true,
    published: true,
    category: "Trends",
    tags: ["Trends", "B2B", "E-commerce", "2025", "AI", "Mobile"],
    author_name: "Mike Chen",
    author_email: "mike@serveb2b.com",
    read_time: 8,
    meta_title: "B2B E-commerce Trends That Will Shape 2025 | ServeB2B Insights",
    meta_description:
      "Discover emerging B2B e-commerce trends for 2025 including AI personalization, mobile-first experiences, sustainability focus, and how Salesforce Commerce Cloud is adapting.",
    created_at: "2024-12-15T00:00:00Z",
    updated_at: "2024-12-15T00:00:00Z",
  },
  "custom-lightning-components-b2b-commerce": {
    id: 3,
    title: "Custom Lightning Components for B2B Commerce",
    slug: "custom-lightning-components-b2b-commerce",
    excerpt:
      "Build powerful custom Lightning components specifically designed for B2B commerce scenarios and complex business requirements.",
    content: `# Custom Lightning Components for B2B Commerce

Lightning Web Components (LWC) provide a powerful framework for building custom functionality in Salesforce B2B Commerce Cloud. This comprehensive guide explores how to create sophisticated components tailored for complex B2B commerce scenarios.

## Understanding B2B Commerce Requirements

B2B commerce has unique requirements that often necessitate custom components beyond standard Salesforce offerings:

### Complex Pricing Models
- **Tier-based pricing** with volume discounts
- **Contract-specific pricing** for different customers
- **Dynamic pricing** based on market conditions
- **Bundle pricing** for product combinations

### Approval Workflows
- **Multi-level approval processes** for large orders
- **Budget approval** workflows
- **Custom approval criteria** based on business rules
- **Automated escalation** processes

### Custom Product Configurators
- **Complex product options** and variants
- **Conditional logic** for product configurations
- **Real-time pricing** calculations
- **Visual product builders**

### Account-Specific Features
- **Customized catalogs** per customer
- **Account-specific branding** and content
- **Custom fields** and data requirements
- **Personalized dashboards** and reports

## Building Your First B2B Lightning Component

Let's create a comprehensive product configurator component that handles complex B2B scenarios:

### Component Structure

\`\`\`javascript
// productConfigurator.js
import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';
import getProductOptions from '@salesforce/apex/ProductConfiguratorController.getProductOptions';
import calculatePrice from '@salesforce/apex/ProductConfiguratorController.calculatePrice';
import addToCart from '@salesforce/apex/ProductConfiguratorController.addToCart';

export default class ProductConfigurator extends LightningElement {
    @api productId;
    @api accountId;
    @track selectedOptions = {};
    @track totalPrice = 0;
    @track isLoading = false;
    @track productOptions = [];
    @track errors = [];

    // Wire method to get product options
    @wire(getProductOptions, { productId: '$productId', accountId: '$accountId' })
    wiredProductOptions({ error, data }) {
        if (data) {
            this.productOptions = data;
            this.initializeDefaultOptions();
        } else if (error) {
            this.handleError('Failed to load product options', error);
        }
    }

    initializeDefaultOptions() {
        // Set default options for required fields
        this.productOptions.forEach(option => {
            if (option.required && option.defaultValue) {
                this.selectedOptions[option.id] = option.defaultValue;
            }
        });
        this.calculateTotalPrice();
    }

    handleOptionChange(event) {
        const optionId = event.target.dataset.id;
        const value = event.target.value;
        const optionType = event.target.dataset.type;
        
        // Handle different option types
        switch(optionType) {
            case 'checkbox':
                this.handleCheckboxChange(optionId, event.target.checked);
                break;
            case 'quantity':
                this.handleQuantityChange(optionId, parseInt(value));
                break;
            default:
                this.selectedOptions[optionId] = value;
        }
        
        this.validateOptions();
        this.calculateTotalPrice();
    }

    handleCheckboxChange(optionId, checked) {
        if (checked) {
            this.selectedOptions[optionId] = true;
        } else {
            delete this.selectedOptions[optionId];
        }
    }

    handleQuantityChange(optionId, quantity) {
        if (quantity > 0) {
            this.selectedOptions[optionId] = quantity;
        } else {
            delete this.selectedOptions[optionId];
        }
    }

    validateOptions() {
        this.errors = [];
        
        this.productOptions.forEach(option => {
            if (option.required && !this.selectedOptions[option.id]) {
                this.errors.push(\`\${option.label} is required\`);
            }
            
            // Custom validation rules
            if (option.validationRules) {
                option.validationRules.forEach(rule => {
                    if (!this.validateRule(rule, this.selectedOptions[option.id])) {
                        this.errors.push(rule.errorMessage);
                    }
                });
            }
        });
    }

    validateRule(rule, value) {
        switch(rule.type) {
            case 'min':
                return value >= rule.value;
            case 'max':
                return value <= rule.value;
            case 'pattern':
                return new RegExp(rule.value).test(value);
            default:
                return true;
        }
    }

    async calculateTotalPrice() {
        try {
            this.isLoading = true;
            const result = await calculatePrice({
                productId: this.productId,
                accountId: this.accountId,
                selectedOptions: this.selectedOptions
            });
            
            this.totalPrice = result.totalPrice;
            this.updatePriceBreakdown(result.priceBreakdown);
        } catch (error) {
            this.handleError('Failed to calculate price', error);
        } finally {
            this.isLoading = false;
        }
    }

    updatePriceBreakdown(breakdown) {
        // Update UI with detailed price breakdown
        this.priceBreakdown = breakdown;
    }

    async handleAddToCart() {
        if (this.errors.length > 0) {
            this.showToast('Error', 'Please fix validation errors before adding to cart', 'error');
            return;
        }

        try {
            this.isLoading = true;
            const result = await addToCart({
                productId: this.productId,
                accountId: this.accountId,
                selectedOptions: this.selectedOptions,
                quantity: this.quantity || 1
            });

            if (result.success) {
                this.showToast('Success', 'Product added to cart successfully', 'success');
                this.dispatchEvent(new CustomEvent('productadded', {
                    detail: {
                        productId: this.productId,
                        cartItemId: result.cartItemId
                    }
                }));
            } else {
                this.showToast('Error', result.errorMessage, 'error');
            }
        } catch (error) {
            this.handleError('Failed to add product to cart', error);
        } finally {
            this.isLoading = false;
        }
    }

    handleError(message, error) {
        console.error(message, error);
        this.showToast('Error', message, 'error');
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }

    // Getters for template
    get hasErrors() {
        return this.errors.length > 0;
    }

    get isAddToCartDisabled() {
        return this.isLoading || this.hasErrors;
    }

    get formattedPrice() {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(this.totalPrice);
    }
}
\`\`\`

### Component Template

\`\`\`html
<!-- productConfigurator.html -->
<template>
    <div class="product-configurator">
        <div class="slds-card">
            <div class="slds-card__header">
                <h2 class="slds-card__header-title">
                    <span>Product Configuration</span>
                </h2>
            </div>
            
            <div class="slds-card__body slds-card__body_inner">
                <!-- Loading Spinner -->
                <template if:true={isLoading}>
                    <lightning-spinner alternative-text="Loading..."></lightning-spinner>
                </template>

                <!-- Error Messages -->
                <template if:true={hasErrors}>
                    <div class="slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_error">
                        <ul>
                            <template for:each={errors} for:item="error">
                                <li key={error}>{error}</li>
                            </template>
                        </ul>
                    </div>
                </template>

                <!-- Product Options -->
                <div class="slds-form slds-form_stacked">
                    <template for:each={productOptions} for:item="option">
                        <div key={option.id} class="slds-form-element">
                            <label class="slds-form-element__label">
                                {option.label}
                                <template if:true={option.required}>
                                    <abbr class="slds-required" title="required">*</abbr>
                                </template>
                            </label>
                            
                            <!-- Text Input -->
                            <template if:true={option.isText}>
                                <div class="slds-form-element__control">
                                    <input type="text" 
                                           class="slds-input" 
                                           data-id={option.id}
                                           data-type="text"
                                           placeholder={option.placeholder}
                                           onchange={handleOptionChange} />
                                </div>
                            </template>

                            <!-- Picklist -->
                            <template if:true={option.isPicklist}>
                                <div class="slds-form-element__control">
                                    <div class="slds-select_container">
                                        <select class="slds-select" 
                                                data-id={option.id}
                                                data-type="picklist"
                                                onchange={handleOptionChange}>
                                            <option value="">--Select--</option>
                                            <template for:each={option.values} for:item="value">
                                                <option key={value.id} value={value.id}>
                                                    {value.label}
                                                </option>
                                            </template>
                                        </select>
                                    </div>
                                </div>
                            </template>

                            <!-- Checkbox -->
                            <template if:true={option.isCheckbox}>
                                <div class="slds-form-element__control">
                                    <div class="slds-checkbox">
                                        <input type="checkbox" 
                                               id={option.id}
                                               data-id={option.id}
                                               data-type="checkbox"
                                               onchange={handleOptionChange} />
                                        <label class="slds-checkbox__label" for={option.id}>
                                            <span class="slds-checkbox_faux"></span>
                                            <span class="slds-form-element__label">{option.description}</span>
                                        </label>
                                    </div>
                                </div>
                            </template>

                            <!-- Quantity Input -->
                            <template if:true={option.isQuantity}>
                                <div class="slds-form-element__control">
                                    <input type="number" 
                                           class="slds-input" 
                                           data-id={option.id}
                                           data-type="quantity"
                                           min="0"
                                           step="1"
                                           onchange={handleOptionChange} />
                                </div>
                            </template>

                            <!-- Help Text -->
                            <template if:true={option.helpText}>
                                <div class="slds-form-element__help">
                                    {option.helpText}
                                </div>
                            </template>
                        </div>
                    </template>
                </div>

                <!-- Price Summary -->
                <div class="slds-box slds-theme_shade slds-m-top_medium">
                    <h3 class="slds-text-heading_small">Price Summary</h3>
                    <div class="slds-grid slds-wrap">
                        <div class="slds-col slds-size_1-of-2">
                            <span class="slds-text-body_regular">Total Price:</span>
                        </div>
                        <div class="slds-col slds-size_1-of-2 slds-text-align_right">
                            <span class="slds-text-heading_medium">{formattedPrice}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slds-card__footer">
                <lightning-button variant="brand" 
                                  label="Add to Cart" 
                                  onclick={handleAddToCart}
                                  disabled={isAddToCartDisabled}>
                </lightning-button>
            </div>
        </div>
    </div>
</template>
\`\`\`

## Advanced B2B Component Patterns

### 1. Approval Workflow Component

For handling complex B2B approval processes:

\`\`\`javascript
// approvalWorkflow.js
import { LightningElement, api, track } from 'lwc';
import submitForApproval from '@salesforce/apex/ApprovalController.submitForApproval';
import getApprovalHistory from '@salesforce/apex/ApprovalController.getApprovalHistory';

export default class ApprovalWorkflow extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track approvalSteps = [];
    @track currentStep = 0;
    @track isSubmitting = false;

    async connectedCallback() {
        await this.loadApprovalHistory();
    }

    async loadApprovalHistory() {
        try {
            const history = await getApprovalHistory({
                recordId: this.recordId,
                objectApiName: this.objectApiName
            });
            this.processApprovalHistory(history);
        } catch (error) {
            console.error('Error loading approval history:', error);
        }
    }

    processApprovalHistory(history) {
        // Process and display approval steps
        this.approvalSteps = history.map((step, index) => ({
            ...step,
            stepNumber: index + 1,
            isCompleted: step.status === 'Approved',
            isPending: step.status === 'Pending',
            isRejected: step.status === 'Rejected'
        }));
    }

    async handleSubmitForApproval() {
        try {
            this.isSubmitting = true;
            const result = await submitForApproval({
                recordId: this.recordId,
                comments: this.template.querySelector('[data-id="comments"]').value
            });
            
            if (result.success) {
                this.showToast('Success', 'Submitted for approval successfully', 'success');
                await this.loadApprovalHistory();
            } else {
                this.showToast('Error', result.errorMessage, 'error');
            }
        } catch (error) {
            this.showToast('Error', 'Failed to submit for approval', 'error');
        } finally {
            this.isSubmitting = false;
        }
    }
}
\`\`\`

### 2. Dynamic Pricing Component

For real-time B2B pricing calculations:

\`\`\`javascript
// dynamicPricing.js
import { LightningElement, api, track, wire } from 'lwc';
import calculateDynamicPrice from '@salesforce/apex/PricingController.calculateDynamicPrice';
import { refreshApex } from '@salesforce/apex';

export default class DynamicPricing extends LightningElement {
    @api productId;
    @api accountId;
    @api quantity = 1;
    @track pricingTiers = [];
    @track currentPrice = 0;
    @track savings = 0;
    @track isLoading = false;

    @wire(calculateDynamicPrice, { 
        productId: '$productId', 
        accountId: '$accountId', 
        quantity: '$quantity' 
    })
    wiredPricing({ error, data }) {
        if (data) {
            this.processPricingData(data);
        } else if (error) {
            console.error('Pricing calculation error:', error);
        }
    }

    processPricingData(data) {
        this.currentPrice = data.currentPrice;
        this.pricingTiers = data.pricingTiers;
        this.savings = data.savings;
        this.isLoading = false;
    }

    handleQuantityChange(event) {
        this.quantity = parseInt(event.target.value);
        this.isLoading = true;
        // Wire will automatically refresh with new quantity
    }

    get formattedCurrentPrice() {
        return this.formatCurrency(this.currentPrice);
    }

    get formattedSavings() {
        return this.formatCurrency(this.savings);
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
}
\`\`\`

## Best Practices for B2B Lightning Components

### 1. Performance Optimization

**Lazy Loading:**
\`\`\`javascript
// Implement lazy loading for large datasets
async loadData() {
    if (!this.dataLoaded) {
        this.data = await this.fetchData();
        this.dataLoaded = true;
    }
}
\`\`\`

**Caching Strategies:**
\`\`\`javascript
// Cache frequently accessed data
@wire(getProductData, { productId: '$productId' })
wiredProductData({ error, data }) {
    if (data) {
        // Cache the data
        this.cachedProductData = { ...data };
    }
}
\`\`\`

**Debouncing:**
\`\`\`javascript
// Debounce expensive operations
handleSearchInput(event) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
        this.performSearch(event.target.value);
    }, 300);
}
\`\`\`

### 2. Error Handling

**Comprehensive Error Management:**
\`\`\`javascript
handleError(operation, error) {
    console.error(\`Error in \${operation}:\`, error);
    
    let userMessage = 'An unexpected error occurred.';
    
    if (error.body && error.body.message) {
        userMessage = error.body.message;
    } else if (error.message) {
        userMessage = error.message;
    }
    
    this.showToast('Error', userMessage, 'error');
    
    // Log error for monitoring
    this.logError(operation, error);
}
\`\`\`

### 3. Accessibility

**ARIA Labels and Roles:**
\`\`\`html
<div role="tabpanel" 
     aria-labelledby="tab-1" 
     aria-hidden="false">
    <!-- Content -->
</div>
\`\`\`

**Keyboard Navigation:**
\`\`\`javascript
handleKeyDown(event) {
    switch(event.keyCode) {
        case 13: // Enter
        case 32: // Space
            this.handleSelection(event);
            break;
        case 27: // Escape
            this.handleCancel();
            break;
    }
}
\`\`\`

### 4. Testing

**Jest Unit Tests:**
\`\`\`javascript
// __tests__/productConfigurator.test.js
import { createElement } from 'lwc';
import ProductConfigurator from 'c/productConfigurator';

describe('c-product-configurator', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders product options correctly', () => {
        const element = createElement('c-product-configurator', {
            is: ProductConfigurator
        });
        
        element.productId = 'test-product-id';
        document.body.appendChild(element);
        
        // Test assertions
        expect(element.shadowRoot.querySelector('.product-configurator')).toBeTruthy();
    });

    it('calculates price correctly', async () => {
        const element = createElement('c-product-configurator', {
            is: ProductConfigurator
        });
        
        element.selectedOptions = { option1: 'value1' };
        await element.calculateTotalPrice();
        
        expect(element.totalPrice).toBeGreaterThan(0);
    });
});
\`\`\`

## Integration with B2B Commerce Cloud

### Cart Integration

\`\`\`javascript
// Integration with Commerce Cloud cart
async addToCommerceCart() {
    const cartItem = {
        productId: this.productId,
        quantity: this.quantity,
        customAttributes: this.selectedOptions
    };
    
    // Use Commerce Cloud APIs
    const result = await this.callCommerceAPI('addToCart', cartItem);
    return result;
}
\`\`\`

### Catalog Integration

\`\`\`javascript
// Integration with product catalog
@wire(getProductCatalog, { accountId: '$accountId' })
wiredCatalog({ error, data }) {
    if (data) {
        this.availableProducts = data.filter(product => 
            this.hasAccess(product, this.accountId)
        );
    }
}
\`\`\`

## Deployment and Maintenance

### 1. Deployment Strategy

**Scratch Org Development:**
\`\`\`bash
# Create scratch org
sfdx force:org:create -f config/project-scratch-def.json -a MyScratchOrg

# Push source
sfdx force:source:push -u MyScratchOrg

# Run tests
sfdx force:apex:test:run -u MyScratchOrg
\`\`\`

**CI/CD Pipeline:**
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Salesforce
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Salesforce CLI
        run: npm install sfdx-cli --global
      - name: Deploy to org
        run: sfdx force:source:deploy -p force-app -u production
\`\`\`

### 2. Version Control

**Git Best Practices:**
- Use feature branches for development
- Implement code review processes
- Tag releases for version tracking
- Maintain comprehensive commit messages

### 3. Monitoring and Maintenance

**Performance Monitoring:**
\`\`\`javascript
// Add performance tracking
const startTime = performance.now();
await this.performOperation();
const endTime = performance.now();
console.log(\`Operation took \${endTime - startTime} milliseconds\`);
\`\`\`

**Error Logging:**
\`\`\`javascript
// Implement comprehensive error logging
logError(component, method, error) {
    const errorLog = {
        component: component,
        method: method,
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        userId: this.currentUserId
    };
    
    // Send to logging service
    this.sendToLoggingService(errorLog);
}
\`\`\`

## Conclusion

Custom Lightning components are essential for creating sophisticated B2B commerce experiences that meet complex business requirements. By following the patterns and best practices outlined in this guide, you can build components that are:

- **Performant** and scalable
- **Accessible** to all users
- **Maintainable** and testable
- **Integrated** with B2B Commerce Cloud
- **Secure** and compliant

The key to success lies in understanding your specific B2B requirements, designing components with reusability in mind, and following Salesforce development best practices throughout the development lifecycle.

**Ready to build custom Lightning components for your B2B commerce platform? Contact ServeB2B today for expert development services and consultation.**`,
    featured: false,
    published: true,
    category: "Development",
    tags: ["Lightning", "Development", "Components", "B2B", "Custom"],
    author_name: "David Kim",
    author_email: "david@serveb2b.com",
    read_time: 15,
    meta_title: "Custom Lightning Components for B2B Commerce | Development Guide",
    meta_description:
      "Learn to build powerful custom Lightning components for B2B commerce scenarios with comprehensive code examples, best practices, and integration patterns.",
    created_at: "2024-12-10T00:00:00Z",
    updated_at: "2024-12-10T00:00:00Z",
  },
}

async function getArticle(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()

    if (error || !data) {
      // Return fallback data if available
      return fallbackArticles[slug] || null
    }

    return data
  } catch (error) {
    console.error("Error fetching article:", error)
    return fallbackArticles[slug] || null
  }
}

async function getRelatedArticles(category: string, currentSlug: string): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .eq("category", category)
      .neq("slug", currentSlug)
      .limit(3)

    if (error || !data || data.length === 0) {
      // Return fallback related articles
      return Object.values(fallbackArticles)
        .filter((article) => article.category === category && article.slug !== currentSlug)
        .slice(0, 3)
    }

    return data
  } catch (error) {
    console.error("Error fetching related articles:", error)
    return Object.values(fallbackArticles)
      .filter((article) => article.category === category && article.slug !== currentSlug)
      .slice(0, 3)
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return {
      title: "Article Not Found | ServeB2B",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.created_at,
      authors: [article.author_name],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(article.category, article.slug)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Development":
        return <Zap className="h-12 w-12 text-purple-600" />
      case "Integration":
        return <Users className="h-12 w-12 text-indigo-600" />
      case "Trends":
        return <BookOpen className="h-12 w-12 text-indigo-600" />
      case "Implementation":
        return <BookOpen className="h-12 w-12 text-blue-600" />
      default:
        return <BookOpen className="h-12 w-12 text-blue-600" />
    }
  }

  // Convert markdown-style content to HTML-like formatting
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Handle headers
        if (line.startsWith('# ')) {
          return `<h1 key="${index}" class="text-3xl font-bold text-gray-900 mb-6 mt-8">${line.substring(2)}</h1>`
        }
        if (line.startsWith('## ')) {
          return `<h2 key="${index}" class="text-2xl font-bold text-gray-900 mb-4 mt-6">${line.substring(3)}</h2>`
        }
        if (line.startsWith('### ')) {
          return `<h3 key="${index}" class="text-xl font-bold text-gray-900 mb-3 mt-5">${line.substring(4)}</h3>`
        }
        
        // Handle bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        
        // Handle bullet points
        if (line.startsWith('- ')) {
          return `<li key="${index}" class="ml-4 mb-2">${line.substring(2)}</li>`
        }
        
        // Handle empty lines
        if (line.trim() === '') {
          return `<br key="${index}" />`
        }
        
        // Regular paragraphs
        return `<p key="${index}" class="mb-4 leading-relaxed">${line}</p>`
      })
      .join('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link
                href="https://www.serveb2b.com/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                aria-label="ServeB2B - Salesforce B2B Commerce Cloud Experts"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ServeB2B</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="/articles" className="text-gray-700 hover:text-blue-600 transition-colors">
                Articles
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-blue-600 transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Link href="/articles" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {article.category}
            </Badge>
            <div className="flex items-center text-gray-600 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {article.read_time} min read
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(article.created_at)}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{article.excerpt}</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-b border-gray-200 py-6 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{article.author_name}</div>
                <div className="text-gray-600 text-sm">{article.author_email}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button variant="outline" size="sm" className="w-fit">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-gray-800 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
          />
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="hover:bg-blue-50 cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help with Your B2B Project?</h3>
            <p className="text-gray-600 mb-4">
              Our expert team at ServeB2B can help you implement the strategies and solutions discussed in this article.
            </p>
            <Link href="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Expert Consultation
              </Button>
            </Link>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-16 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full border-blue-100 hover:border-blue-300 group">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                        {getCategoryIcon(relatedArticle.category)}
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{relatedArticle.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {relatedArticle.read_time} min read
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{relatedArticle.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{relatedArticle.author_name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(relatedArticle.created_at)}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {relatedArticle.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with B2B Insights</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest B2B Salesforce articles and insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link
                href="https://www.serveb2b.com/"
                className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">ServeB2B</span>
              </Link>
              <p className="text-gray-400">
                Your trusted partner for Salesforce B2B solutions and digital transformation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">B2B Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Commerce Cloud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Salesforce B2B Core
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">B2B Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/articles" className="hover:text-white transition-colors">
                    B2B Articles
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-white transition-colors">
                    B2B Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="\
