export default function Information() {
	return (
		<div className="mb-10">
			<div className="flex flex-col md:flex-row p-16 justify-between gap-12 md:gap-24 m-auto container">
				<div className="p-6 bg-beige-200 text-center w-full list-none leading-[50px] ticketsList">
					<h2 className="text-4xl mb-5 border-b border-black w-3/4 m-auto p-1">
						Tickets
					</h2>
					<li>
						<span>
							<strong>Baby</strong>
						</span>
						| <span>10 Gold coins</span>
					</li>
					<li>
						<span>
							<strong>Child (4 - 12)</strong>
						</span>
						| <span>15 Gold coins</span>
					</li>
					<li>
						<span>
							<strong>Teenager</strong>
						</span>
						| <span>30 Gold coins</span>
					</li>
					<li>
						<span>
							<strong>Adult</strong>
						</span>
						| <span>40 Gold coins</span>
					</li>
				</div>
				<div className="p-6 bg-beige-200 text-center w-full list-none leading-10 hoursList">
					<h2 className="text-4xl mb-5 border-b border-black w-3/4 m-auto p-1">
						Opening hours
					</h2>
					<li>
						<span>
							<strong>Mon</strong>
						</span>
						| <span>9:30 AM - 6:00 PM</span>
					</li>
					<li>
						<span>
							<strong>Tue</strong>
						</span>
						| <span>9:30 AM - 6:00 PM</span>
					</li>
					<li>
						<span>
							<strong>Wed</strong>
						</span>
						| <span>Closed</span>
					</li>
					<li>
						<span>
							<strong>Thu</strong>
						</span>
						| <span>9:30 AM - 6:00 PM</span>
					</li>
					<li>
						<span>
							<strong>Fri</strong>
						</span>
						| <span>9:30 AM - 6:00 PM</span>
					</li>
					<li>
						<span>
							<strong>Sat</strong>
						</span>
						| <span>9:00 AM - 6:30 PM</span>
					</li>
					<li>
						<span>
							<strong>Sun</strong>
						</span>
						| <span>9:00 AM - 6:30 PM</span>
					</li>
				</div>
			</div>
			<div className="w-full text-center p-8 bg-beige-200">
				<em className="mr-2">
					"Let's bring the wonderful creatures of us mighty gods to
					the human world as well."
				</em>
				~ Zeus (GreekCage Zoo Manager)
			</div>
		</div>
	);
}
