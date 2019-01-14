import React from "react";
import { MainContainer, PageHeader, ContentNav } from "../../GlobalStyles";
import {
  FrontEndSection,
  StylingSection,
  BackEndSection,
  DatabaseSection,
  DeploymentSection,
  APISection
} from "./TechnologyStyles";

function Technology(props) {
  return (
    <MainContainer>
      <PageHeader>
        <section>
          <h1>Technology</h1>
          <h2>Knowing what tools to use, and why</h2>
          <p>
            All tools serve a purpose, and have advantages and disadvantages.
            Choose your tools based on that, see what your app needs, and choose
            the tools that best fit those needs.
          </p>
        </section>
        <section>
          <h2>Contents</h2>
          <ContentNav>
            <a href="#front-end">Front-End</a>
            <a href="#styling">Styling</a>
            <a href="#back-end">Back-End</a>
            <a href="#database">Database</a>
            <a href="#deployment">Deployment</a>
            <a href="#api">APIs</a>
          </ContentNav>
        </section>
      </PageHeader>
      <hr />
      <FrontEndSection id="front-end">
        <header>
          <h2>Front-End</h2>
          <div>
            <img
              src="https://res.cloudinary.com/dlo7dkdfy/image/upload/c_scale,w_350/v1547375376/Design-Systems/React-icon.png"
              alt="reactjs logo"
            />
          </div>
        </header>
        <section>
          <div>
            <h3>Why we chose this tool</h3>
            <ul>
              <li>Flexibility in what tools to work with</li>
              <li>React has less boilerplate to set up</li>
              <li>
                Well established, thriving community, and Facebook developed
              </li>
              <li>JSX- easy readability/writability</li>
            </ul>
          </div>
          <div>
            <h3>Some drawbacks</h3>
            <ul>
              <li>Can get heavy quick if many dependencies are used</li>
              <li>
                Being less opinionated can be a drawback as well since not much
                comes out of the box, including state management and routing
              </li>
            </ul>
          </div>
        </section>
      </FrontEndSection>
      <hr />
      <StylingSection id="styling">
        <header>
          <h2>Styling</h2>
          <img
            src="https://res.cloudinary.com/dlo7dkdfy/image/upload/v1547372469/Design-Systems/styled-components.png"
            alt="styled-components icon"
          />
        </header>
        <section>
          <div>
            <h3>Why we chose this tool</h3>
            <ul>
              <li>Plays well with React</li>
              <li>
                Encapsulation out of the box, you don't need to chain selectors
                to be more specific since Styled-Components takes care of that
                for you
              </li>
              <li>
                Classes are optional, since elements are encapsulated, you can
                select elements. Classes can still be used to give more meaning
                to an element(for other developers)
              </li>
              <li>
                Javascript in CSS. You can do anything CSS can do, even the
                newest features like variables and calc(). You can do anything
                Preprocessors do, including mixins. You also have React and JS
                functionality to pass props, create functions, etc
              </li>
            </ul>
          </div>
          <div>
            <h3>Some drawbacks</h3>
            <ul>
              <li>
                Since it is Javascript, the styles have to parse first, then
                they are applyed, so you will notice the styles change when the
                page loads
              </li>
              <li>
                ClassNames that Styled Components use are jarbled strings so it
                can be more difficult to debug when using devTools
              </li>
            </ul>
          </div>
        </section>
      </StylingSection>
      <hr />
      <BackEndSection id="back-end">
        <header>
          <h2>Back-End</h2>
          <img
            src="https://res.cloudinary.com/dlo7dkdfy/image/upload/c_scale,w_350/v1547378036/Design-Systems/node-express.png"
            alt="node and express icons"
          />
        </header>
        <section>
          <div>
            <h3>Why we chose this tool</h3>
            <ul>
              <li>Similar ecosystem between front-end and back-end</li>
              <li>Flexibility with libraries</li>
              <li>More control than Django, less abstracted away</li>
              <li>Async and non-blocking</li>
            </ul>
          </div>
          <div>
            <h3>Some drawbacks</h3>
            <ul>
              <li>Need to know Javascript and understand Asynchronicity</li>
            </ul>
          </div>
        </section>
      </BackEndSection>
      <hr />
      <DatabaseSection id="database">
        <header>
          <h2>Database</h2>
          <img
            src="https://res.cloudinary.com/dlo7dkdfy/image/upload/c_scale,w_420/v1547379403/Design-Systems/postgre.png"
            alt="postgre database icon"
          />
        </header>
        <section>
          <div>
            <h3>Why we chose this tool</h3>
            <ul>
              <li>
                Similar ecosystem between front-end, back-end, and database
                queries
              </li>
              <li>
                SQL is used because it is a very popular database which will
                allow for ease of maintenance throughout and beyond the project
                timeline
              </li>
              <li>
                Allows you to use tools like knex which allows for writing SQL
                queries in Javascript
              </li>
            </ul>
          </div>
          <div>
            <h3>Some drawbacks</h3>
            <ul>
              <li>
                Possibility of multiple endpoints for specific requests compared
                to writing specific queries with newer technology like
                GraphQL+Apollo
              </li>
            </ul>
          </div>
        </section>
      </DatabaseSection>
      <hr />
      <DeploymentSection id="deployment">
        <header>
          <h2>Deployment</h2>
          <img
            src="https://res.cloudinary.com/dlo7dkdfy/image/upload/c_scale,w_450/v1547379981/Design-Systems/heroku.png"
            alt="heroku icon"
          />
        </header>
        <section>
          <div>
            <h3>Why we chose this tool</h3>
            <ul>
              <li>
                Both back-end/front-end support and automatic postgres
                conversion
              </li>
              <li>
                Quick set ups for new projects, also acts as a database with
                simple migrations
              </li>
            </ul>
          </div>
          <div>
            <h3>Some drawbacks</h3>
            <ul>
              <li>Database goes to sleep with free version</li>
            </ul>
          </div>
        </section>
      </DeploymentSection>
      <hr />
      <APISection id="api">
        <header>
          <h2>APIs</h2>
          <img
            src="https://res.cloudinary.com/dlo7dkdfy/image/upload/v1547382894/Design-Systems/APIs.png"
            alt="many API icons"
          />
        </header>
        <section>
          <div>
            <h3>Auth</h3>
            <p>Passport + Auth0 Strategy</p>
            <ul>
              <li>
                We chose passport due to all of the different strategies and
                integrations it has
              </li>
              <li>
                The passport and auth0 strategy is well known and it takes the
                best of two powerful auth tools
              </li>
            </ul>
          </div>
          <div>
            <h3>Payments</h3>
            <p>Stripe</p>
            <ul>
              <li>
                Stripe is one of the most powerful and secure payments system in
                the world
              </li>
              <li>It is developer-friendly with amazing documentation</li>
            </ul>
          </div>
          <div>
            <h3>Media Storage</h3>
            <p>AWS s3 Media Storage</p>
            <ul>
              <li>We chose AWS due to its simple integration with Node</li>
              <li>
                It takes extra security mesures with IAM accounts and different
                verification methods
              </li>
            </ul>
          </div>
          <div>
            <h3>Validating Cities</h3>
            <p>Google Place Autocomplete</p>
            <ul>
              <li>We chose Google for its ease of use and powerful APIs</li>
              <li>
                All it takes is a simple HTTP request, no configuration needed
              </li>
            </ul>
          </div>
          <div>
            <h3>Filtering By Distance</h3>
            <p>Google Distance Maxtrix</p>
            <ul>
              <li>
                Again, we chose Google for this due to its ease of use and
                powerful APIs
              </li>
              <li>
                All it takes is a simple HTTP request, no configuration needed
              </li>
              <li>
                Not many APIs and companies can do powerful computation of
                distance calculations like Google can
              </li>
            </ul>
          </div>
          <div>
            <h3>Validating Acclaim Badges</h3>
            <p>Acclaim</p>
            <ul>
              <li>
                Acclaim partners with the organizations that issue recognition,
                the people who earn it, and the employers who hire them
              </li>
            </ul>
          </div>
        </section>
      </APISection>
      <hr />
    </MainContainer>
  );
}

export default Technology;
