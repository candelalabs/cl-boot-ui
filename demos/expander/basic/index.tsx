import {
	Expander
} from "cl-boot-ui";
import * as React from "react";

export default () => {
	return <Expander>
		<div class="form-inline-list" id="DetailedAnalysis">

			<div class="row form-group-inline">

				<div class="col-xs-12">
					<p><strong>1. Investment objective  </strong></p>
					<ul class="list-inline option">
						<li>
							<label class="radiobox">
								<input type="radio" name="option1" />
								<span></span>
							</label>
							<span class="radio-text">Capital preservation is my priority.</span>
						</li>
						<li>
							<label class="radiobox">
								<input type="radio" name="option1" />
								<span></span>
							</label>
							<span class="radio-text">I like my portfolio to provide steady and regular returns over the long term. I am concerned about fluctuations in returns.</span>
						</li>
						<li>
							<label class="radiobox">
								<input type="radio" name="option1" />
								<span></span>
							</label>
							<span class="radio-text">I like to see and overall growth in my portfolio and am less concerned about fluctuations in returns.</span>
						</li>
						<li>
							<label class="radiobox">
								<input type="radio" name="option1" />
								<span></span>
							</label>
							<span class="radio-text">My primary objective is to maximise growth over long term. I am least concerned about fluctuations in returns.</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Expander>;
};
