interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private marks: Map<string, number> = new Map();

  mark(name: string): void {
    this.marks.set(name, performance.now());
  }

  measure(name: string, startMark: string, endMark: string): void {
    const start = this.marks.get(startMark);
    const end = this.marks.get(endMark);

    if (start && end) {
      this.metrics.push({
        name,
        value: end - start,
        timestamp: Date.now(),
      });

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance Metric - ${name}: ${(end - start).toFixed(2)}ms`);
      }
    }
  }

  getMetrics(): PerformanceMetric[] {
    return this.metrics;
  }

  clearMetrics(): void {
    this.metrics = [];
    this.marks.clear();
  }

  // Track component render time
  trackComponentRender(componentName: string): () => void {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      this.metrics.push({
        name: `${componentName} Render`,
        value: endTime - startTime,
        timestamp: Date.now(),
      });
    };
  }

  // Track API call duration
  trackApiCall(apiName: string): () => void {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      this.metrics.push({
        name: `${apiName} API Call`,
        value: endTime - startTime,
        timestamp: Date.now(),
      });
    };
  }
}

export const performanceMonitor = new PerformanceMonitor(); 