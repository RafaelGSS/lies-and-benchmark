A1 <- c(
  4670, 4646, 4612, 4618, 4646,
  4609, 4623, 4629, 4566, 4628,
  4582, 4636, 4621, 4574, 4624,
  4563, 4651, 4642, 4586, 4621,
  4606, 4628, 4575, 4631, 4646,
  4600, 4594, 4661, 4568, 4611
)

B1 <- c(
  4630, 4655, 4652, 4633, 4637,
  4661, 4625, 4680, 4647, 4639,
  4633, 4661, 4638, 4621, 4630,
  4682, 4703, 4665, 4652, 4648,
  4673, 4651, 4669, 4646, 4612,
  4654, 4651, 4619, 4637, 4620
)
library(ggplot2)
library(hrbrthemes)

df <- data.frame( req = c(A1, B1),
                  benchmark=c(rep("A", length(A1)), rep("B", length(B1)))
)

ggplot(df, aes(benchmark, req, color=benchmark)) + geom_boxplot() + 
  geom_point()

### Side-by-side histograms

ggplot(df,aes(req, ..density.., fill=benchmark)) + 
  geom_histogram(color="#e9ecef",alpha=0.4, bins=10, position="identity") + 
  theme_ipsum() + scale_fill_manual(values=c("#69b3a2", "#404080"))
